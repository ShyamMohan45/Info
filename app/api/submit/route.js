import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer";
export async function POST(request) {
    try{
    const body = await request.json()
    const {name,email,phone,address} = body
    const client = await clientPromise
    const db = client.db("flow")
    const collection = db.collection('users')
const doc = await collection.findOne({email:body.email})

if(doc){
    return NextResponse.json
({success:false,error:true,message:"email already exists"})
}


await collection.insertOne({
        name:body.name,
        email:body.email,
     phone:body.phone,
     address:body.address``
     

    })



        // Send email to your Gmail
    let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                   pass: process.env.EMAIL_PASS, // your Gmail app password
        
            },
        });


   const info =      await transporter.sendMail({
            from: `"Form Submission" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: "New Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
        });
        console.log("Email sent:", info);

    return NextResponse.json
({success: true, error: false, message: 'User saved successfully!' })
    }
    catch (err) {
    console.error(err);
    return NextResponse.json
({ success: false, error: true, message: 'Failed to save user' });
  }
}