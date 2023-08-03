import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import connectDB from "../../../../utils/connectdb";
import { Chat } from "../../../../models/Chat";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req) {
    try {
        const {userId} = getAuth(req)
        await connectDB()
        const { message, api } = await req.json();

        if (api === '') {
            return new NextResponse(
              JSON.stringify({ message: 'api is required!' }),
              { status: 403 }
            );
          }
    

        const config = new Configuration({
            apiKey: api,
        })
        
        const openai = new OpenAIApi(config)
        

        if (message === "") {
            return NextResponse.json({ message: "message is required!" }, { status: 400 })
        }
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user", content: message
            }]
        })
        const reply = response.data.choices[0].message.content

        await Chat.create({message, reply, user: userId})

        return NextResponse.json({ message: message, reply: "how are you" }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message}, { status: 500 })
    }
}

export async function GET(req){
    try{
        await connectDB()
        const {userId} = getAuth(req);
        const chat = await Chat.find({user: userId})
        return new NextResponse(JSON.stringify({chat}), {status: 200})
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message}, { status: 500 })
    }
}