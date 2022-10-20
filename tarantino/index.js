//Declaro variables para..?

const express = require('express');

const PORT = 3000;
const server = express();
const router = express.Router();

router.get("/", (request, response) => {
    //request
    const killBill = {
        title: "Kill Bill",
        runningTime: "110 min",
        year: "2003",
        image: "https://pics.filmaffinity.com/Kill_Bill_Volumen_1-216872360-large.jpg",
        genre: "Action. Thriller. Martial Arts. Crime. Revenge. Cult Movie",
        synopsis: "An assassin known only as 'the Bride' (Uma Thurman) is betrayed by her boss, Bill (David Carradine). Four years after surviving a bullet in the head, she emerges from a coma and swears revenge on her former master and his deadly squad of international assassins.",
        cast: "Uma Thurman, Lucy Liu, Daryl Hannah, Vivica A. Fox, Sonny Chiba, Chiaki Kuriyama, Michael Bowen, Julie Dreyfus, Michael Parks, David Carradine, Michael Madsen, Gordon Liu, Jun Kunimura, Kenji Ohba, Yuki Kazamatsuri, James Parks, Sakichi Satô",
        funFact: "Hattori Hanzo leaving his life as a swordsmith behind and opening up a sushi bar specifically in Okinawa is a bit of an inside joke. Okinawa has a reputation in Japan for not having great sushi (they love pork, though) so it’s suggested in the film that an Okinawan sushi bar is the perfect place for Hanzo to hide from his old life. Not to mention the shared love of perfection, craftsmanship, and knives."
    }
    //response
    return response.send(killBill);
});

router.get("/", (request, response) => {
    //request
    const pulpFiction = {
        title: "Pulp Fiction",
        runningTime: "153 min",
        year: "1994",
        image: "https://pics.filmaffinity.com/pulp_fiction-210382116-mmed.jpg",
        genre: "Thriller. Crime. Ensemble Film. Cult Movie. Black Comedy",
        synopsis: "The film interweaves three tales: the first story focuses on Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson), two hit men on duty for 'the big boss,' Marsellus Wallace (Ving Rhames), whose gorgeous wife, Mia (Uma Thurman), takes a liking to Vincent. In the second, a down-and-out pugilist (Bruce Willis), who is ordered to take a fall, decides that there’s more money in doing the opposite. The final chapter follows a pair of lovers (Amanda Plummer and Tim Roth) as they prepare to hold up a diner.",
        cast: "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Ving Rhames, Harvey Keitel, Tim Roth, Amanda Plummer, María de Medeiros, Eric Stoltz, Rosanna Arquette, Christopher Walken, Paul Calderon, Bronagh Gallagher, Peter Greene, Stephen Hibbert, Angela Jones, Phil LaMarr, Robert Ruth, Julia Sweeney, Quentin Tarantino, Frank Whaley, Duane Whitaker, Steve Buscemi, Burr Steers",
        funFact: "Pulp Fiction drops the f-bomb a whopping 265 times. Just above it in f-bomb usage is Reservoir Dogs, with 269 uses of the word. Only Quentin Tarantino could beat Tarantino at his own game."
    }
    //response
    return response.send(pulpFiction);
});

router.get("/", (request, response) => {
    //request
    const reservoirDogs = {
        title: "Reservoir Dogs",
        runningTime: "99 min",
        year: "1992",
        image: "https://pics.filmaffinity.com/reservoir_dogs-904905830-large.jpg",
        genre: "Thriller. Action. Crime. Neo-noir. Hest Film. Independent Film(US). Cult Movie.",
        synopsis: "They were six strangers, assembled to pull off the perfect crime. Hired by mob boss Joe Cabot and given fake names so no one could identify the others, they thought there was no way their heist could fail. But they are ambushed by the police, so they have to go back to their rendezvous point.",
        cast: "Tim Roth, Harvey Keitel, Chris Penn, Steve Buscemi, Michael Madsen, Lawrence Tierney, Randy Brooks, Kirk Baltz, Edward Bunker, Quentin Tarantino, Burr Steers",
        funFact: "Keitel brought up this factoid as he recalled the films unusually long rehearsal process. 'We had two weeks of rehearsal, which is unheard of in Hollywood,' he said. 'We actually almost went to four, because Quentin thought at one time about doing a play.'"
    }
    //response
    return response.send(pulpFiction);
});

server.use('/', router);

server.listen(PORT);
