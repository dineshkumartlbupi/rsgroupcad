const Blog = require('../models/Blog');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single blog
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            res.status(404).json({ message: 'Blog not found' });
            return;
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private
const createBlog = async (req, res) => {
    console.log('createBlog request body:', req.body);
    console.log('createBlog user:', req.user);

    if (!req.body.title || !req.body.content) {
        res.status(400);
        res.json({ message: 'Please add a title and content' });
        return;
    }

    if (!req.user) {
        res.status(401).json({ message: 'User not authenticated in controller' });
        return;
    }

    try {
        const blogData = {
            title: req.body.title,
            content: req.body.content,
            excerpt: req.body.excerpt || (req.body.content ? req.body.content.substring(0, 100) + '...' : ''),
            image: req.body.image,
            tags: req.body.tags,
            category: req.body.category,
            user: req.user._id, // Explicitly use _id
            status: req.body.status || 'draft'
        };

        console.log('Creating blog with data:', blogData);

        const blog = await Blog.create(blogData);

        res.status(200).json(blog);
    } catch (error) {
        console.error('Create blog detailed error:', error);
        if (error.code === 11000) {
            res.status(400).json({ message: 'Blog with this title already exists' });
            return;
        }
        res.status(500).json({
            message: 'Server Error: ' + error.message,
            stack: process.env.NODE_ENV === 'production' ? null : error.stack
        });
    }
};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            res.status(404);
            res.json({ message: 'Blog not found' });
            return;
        }

        // Check for user
        if (!req.user) {
            res.status(401);
            res.json({ message: 'User not found' });
            return;
        }

        // Make sure the logged in user matches the blog user (Optional: Admin can edit all)
        // if (blog.user.toString() !== req.user.id) {
        //     res.status(401);
        //     throw new Error('User not authorized');
        // }

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            res.status(404);
            res.json({ message: 'Blog not found' });
            return;
        }

        if (!req.user) {
            res.status(401);
            res.json({ message: 'User not found' });
            return;
        }

        await blog.deleteOne();

        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};
