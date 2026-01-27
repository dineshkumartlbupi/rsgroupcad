const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();

        const adminUser = await User.create({
            name: 'Admin User',
            email: 'admin@rscadgroup.com',
            password: 'admin123456', // Will be hashed by pre-save hook
            role: 'admin'
        });

        console.log('Data Imported!');
        console.log('Admin User Created:');
        console.log('Email: admin@rscadgroup.com');
        console.log('Password: admin123456');

        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
