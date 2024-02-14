const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const RagSchema = new Schema({
  ragName:String,
  ragDomain:String,

  })
  const RagModel = model("ragdata",RagSchema)
  // model to add rag after clicking data source

  const RagUpdate = new Schema({
    rag:String
  })
const RagUpdateModel = model("ragupdate",RagUpdate)

const DataSchema = new Schema({
  chatbotID:String,
  chatbotName:{type:String,
    trim:true,
    required:true},
  combinedData:[],
  domain:{type:String,
    required:true},
  rag:[],
  ragAdded:[]
}, {
  timestamps: true
});

const DataModel = model("data", DataSchema);

module.exports = { DataModel ,RagModel,RagUpdateModel};
