var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for (var i = 0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i]);
}

const interests = ["Reading", "Cooking", "Cosplay", "Drawing", "Writing"];
const favoriteInterest = ["Writing"]

for (let i = 0; i < interests.length; i++) {
    if (interests[i] == favoriteInterest) {
        console.log(`My absolute favorite interest is: ${interests[i]}.`);
    } else {
        console.log(`One of my interests is: ${interests[i]}.`);
    }
}