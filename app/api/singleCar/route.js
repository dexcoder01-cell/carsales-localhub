import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const uri = process.env.MONGODB_URI;
let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db('carAuctionDB');
    const cars = db.collection('singlecars');
    const allCars = await cars.find({}).toArray();
    const carsData = allCars.map(car => ({
      ...car,
      _id: car._id.toString()
    }));
    return NextResponse.json(carsData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch cars: ' + error.message },
      { status: 500 }
    );
  }
}

// ✅ POST - Add new car with image saving
export async function POST(request) {
  try {
    const client = await connectToDatabase();
    const db = client.db('carAuctionDB');
    const cars = db.collection('singlecars');
    
    const formData = await request.formData();
    const carData = {};
    const uploadedImages = [];
    
    // Process all form fields
    for (const [key, value] of formData.entries()) {
      // Check if it's an image file
      if (key === 'images' && value instanceof File) {
        const fileName = `${Date.now()}_${value.name}`;
        const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);
        
        // Save file to public/uploads
        const buffer = Buffer.from(await value.arrayBuffer());
        fs.writeFileSync(filePath, buffer);
        
        uploadedImages.push(fileName);
      } else if (!key.startsWith('imageCategory_')) {
        carData[key] = value;
      }
    }
    
    // Add images array to car data
    carData.images = uploadedImages;
    
    const result = await cars.insertOne(carData);
    
    return NextResponse.json({ 
      message: 'Car added successfully', 
      id: result.insertedId,
      images: uploadedImages
    });
    
  } catch (error) {
    console.error('Error adding car:', error);
    return NextResponse.json(
      { error: 'Failed to add car: ' + error.message },
      { status: 500 }
    );
  }
}