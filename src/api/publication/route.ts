import connectMongoDB from "@/Libs/ConnectMongoDB"
import medecins from "@/models/medecin.model";
import { NextResponse } from "next/server";

export  async function POST(request:any){
    const {Ingredient, Preparation, Use } = await request.json()
    await connectMongoDB();
    await medecins.create({Ingredient, Preparation, Use })
    return NextResponse.json({message:"published"}, {status:201} )
}