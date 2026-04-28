import { MongoClient } from 'mongodb';
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

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db('carAuctionDB');  // Aapka database name
    const cars = db.collection('singlecars');  // Aapka collection name
    
    const allCars = await cars.find({}).toArray();
    
    // Convert _id to string for JSON response
    const carsData = allCars.map(car => ({
      ...car,
      _id: car._id.toString()
    }));
    
    return NextResponse.json(carsData);
    
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cars: ' + error.message },
      { status: 500 }
    );
  }
}