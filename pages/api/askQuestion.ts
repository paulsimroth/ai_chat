// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { adminDb } from '@/firebaseAdmin';
import admin from 'firebase-admin';
import query from '@/utils/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please provide a prompt!" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "Please provide a valid Chat ID" });
        return;
    }

    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || 'Unable to get answer!',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://links.papareact.com/89k',
        }
    }

    await adminDb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message);

    res.status(200).json({ answer: message.text });
}
