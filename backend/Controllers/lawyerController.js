import Lawyer from "../models/LawyerSchema.js"

export const updateLawyer = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedLawyer = await Lawyer.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({ success: true, message: "successfully updated", data: updatedLawyer });
    } catch (error) {
        res.status(500).json({ success: false, message: "failed to update" });
    }
};


export const deleteLawyer = async (req, res) => {
    const id = req.params.id;

    try {
        await Lawyer.findByIdAndDelete(
            id,
            
        );

        res.status(200).json({ success: true, message: "successfully deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "failed to delete" });
    }
};


export const getSingleLawyer = async (req, res) => {
    const id = req.params.id;

    try {
        const lawyer = await Lawyer.findById(id).populate('reviews').select("-password");

        res.status(200).json({ success: true, message: "Lawyer found", data: lawyer });
    } catch (error) {
        res.status(404).json({ success: false, message: "no Lawyer found" });
    }
};

export const getAllLawyer = async (req, res) => {

    try {
        const{query} = req.query
        let lawyers;
        if(query){
            lawyers=await Lawyer.find({
                isApproved:'approved', 
                $or:[
                    {name:{$regex: query, $options:'i'}}, 
                    {specialization:{$regex: query, $options:'i'}} ],
            }).select('-password');

        }
        else{
            lawyers = await Lawyer.find({isApproved:'approved'}).select("-password");
        }
        

        res.status(200).json({ success: true, message: "Lawyers found", data: lawyers });
    } catch (error) {
        res.status(404).json({ success: false, message: "not found" });
    }
};