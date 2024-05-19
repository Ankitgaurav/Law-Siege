import User from '../models/UserSchema.js'
import Lawyer from '../models/LawyerSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d',
    });
};

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;
    try {
        let user = null;

        if (role === 'client') {
            user = await User.findOne({ email });
        } else if (role === 'lawyer') {
            user = await Lawyer.findOne({ email });
        }

        // Check if user exists
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'client') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        } else if (role === 'lawyer') {
            user = new Lawyer({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }

        await user.save();

        res.status(200).json({ success: true, message: 'User successfully created' });
    } 
    catch (err) {
        console.error('Error in register', err);
        res.status(500).json({ success: false, message: 'Internal server error, try again.' });
    }
};

export const login = async (req, res) => {
    const { email } = req.body;
    try {
        let user = null;

        const client = await User.findOne({email})
        const lawyer = await Lawyer.findOne({email})

        if(client){
            user=client
        }
        if(lawyer){
            user=lawyer
        }

        // Check if the user exists in either User or Lawyer model
        user = await User.findOne({ email });
        if (!user) {
            user = await Lawyer.findOne({ email });
        }

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: 'Invalid credentials' });
        }

        // Generate token
        const token = generateToken(user);

        // Exclude sensitive information from the response
        const { password, role, appointments, ...rest } = user._doc;

        res
        .status(200)
        .json({ status: true, message: 'Successfully logged in', token, data: { ...rest }, role });
    } 
    catch (err) {
        console.error('Error in login', err);
        res.status(500).json({ status: false, message: 'Failed to login' });
    }
};
