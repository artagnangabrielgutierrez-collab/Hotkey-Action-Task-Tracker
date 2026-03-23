//@ts-nocheck

const quotesFallback = [
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work, the luckier you get.",
  "Don't stop when you're tired. Stop when you're done.",
];

export async function GET() {
  let prevRandom = null;
  let random;
  do {
    random = Math.floor(Math.random() * quotesFallback.length);
  } while (random === prevRandom);
  prevRandom = random;

  try {
    const res = await fetch("");
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    if (error) {
      return Response.json(quotesFallback[random]);
    }
  }
}



//real api key for quotes: https://dummyjson.com/quotes/random
