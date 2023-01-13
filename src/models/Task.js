import { Schema, model } from "mongoose";

//model task 
const taskSchema = new Schema
(
    {
        title: 
        {
            type:     String,
            required: true,
            unique:   true,
            trim:     true
        },
        description: 
        {
            type:     String,
            required: true 
        },
        done: 
        {
            type:    Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('Task', taskSchema) //data model created based on taskSchema 