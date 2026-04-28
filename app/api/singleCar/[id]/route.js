import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = "mongodb://localhost:27017";
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

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    console.log("Fetching car with ID:", id);
    
    const client = await connectToDatabase();
    const db = client.db('carAuctionDB');
    const cars = db.collection('singlecars');
    
    // Validate if id is a valid MongoDB ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid car ID format' },
        { status: 400 }
      );
    }
    
    const car = await cars.findOne({ _id: new ObjectId(id) });
    
    if (!car) {
      return NextResponse.json(
        { error: 'Car not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      ...car,
      _id: car._id.toString()
    });
    
  } catch (error) {
    console.error('Error fetching car:', error);
    return NextResponse.json(
      { error: 'Failed to fetch car: ' + error.message },
      { status: 500 }
    );
  }
}