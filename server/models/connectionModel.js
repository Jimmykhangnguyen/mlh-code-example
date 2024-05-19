import mongoose from "mongoose";

const ConnectionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
	},
	phone: {
		type: String,
	},
});
const ConnectionModel = mongoose.model("Connection", ConnectionSchema);
export default ConnectionModel;
