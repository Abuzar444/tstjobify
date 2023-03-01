import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide your company name'],
        maxLength: 50
    },
    position: {
        type: String,
        required: [true, 'Please provide your position'],
        maxLength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'pending', 'declined'],
        default: 'pending'
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'internship', 'remote'],
        default: 'full-time'
    },
    jobLocation: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    }
}, {timestamps: true})

export default mongoose.model('Job', JobSchema)