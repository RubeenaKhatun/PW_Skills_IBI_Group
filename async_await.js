// Function that returns a promise after a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fetchData() {
  try {
    console.log("Fetching data...");
    await delay(2000);
    console.log("Data fetched successfully!");
    return { data: "Example" };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed to fetch data" };
  }
}

async function main() {
  const result = await fetchData();
  console.log("Result:", result);
}
main();
