import ConnectionModel from "../models/connectionModel.js";
import Connection from "../models/connectionModel.js";

export const getAllConnections = async (req, res) => {
    try {
        const connections = await ConnectionModel.find({});
        res.status(200).json({ connections })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

export const createConnection = async (req, res) => {
	try {
		const connection = await Connection.create(req.body);
		res.status(201).json({ connection });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const deleteConnection = async (req, res) => {
    try {
        const { id: connectionId } = req.params
        const connection = await ConnectionModel.deleteOne({ _id: connectionId });
        res.status(201).json({ connection });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};