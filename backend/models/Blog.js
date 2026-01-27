const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String, // Can store HTML or Markdown
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    image: {
        type: String, // URL to the image
        required: false
    },
    tags: [{
        type: String
    }],
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    slug: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

// Middleware to create slug from title if not provided
blogSchema.pre('save', async function () {
    if (this.isModified('title') && !this.slug) {
        let slug = this.title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');

        // Ensure slug is not empty
        if (slug.length === 0) {
            slug = 'blog-' + Date.now();
        }

        this.slug = slug;
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
