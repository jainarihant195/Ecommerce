const mongoose=require("mongoose");
const {Schema}=mongoose;
const productSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter Product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter Product Price"],
        maxlength:[8,"Price cannot exceed 8 charaacters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,"Please enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please enter Product Stock"],
        maxlength:[4,"Stock can not exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model("Product",productSchema);