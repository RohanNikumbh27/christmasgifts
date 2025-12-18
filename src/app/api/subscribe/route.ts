import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        // Validate email
        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Get database connection
        const db = await getDatabase();
        const collection = db.collection('emails');

        // Check if email already exists
        const existingEmail = await collection.findOne({ email: email.toLowerCase() });
        if (existingEmail) {
            return NextResponse.json(
                { message: 'Email already registered', success: true },
                { status: 200 }
            );
        }

        // Insert new email
        await collection.insertOne({
            email: email.toLowerCase(),
            createdAt: new Date(),
        });

        return NextResponse.json(
            { message: 'Email saved successfully', success: true },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error saving email:', error);
        return NextResponse.json(
            { error: 'Failed to save email' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Email subscription endpoint' },
        { status: 200 }
    );
}
