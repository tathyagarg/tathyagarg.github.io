# Math Splitting

So I'm making a discord bot. I've tried to make another pokemon fire red discord bot before, but ended up abandoning it. And I don't feel like going through all that code now, there's probably at least a couple thousand lines in there. So I'm making a new version. As I'm writing this, I've already worked on this bot a bit, so whatever.

Here's what I did in my latest update:

1. Started ignoring .sql files in .gitignore (idk if it's working tbh)
2. Added a command to clear the user database, since I'll be adding fields a lot.
3. Started work on party.py, which will hold commands to view and interact with your party
4. Since the user db now holds a party field for each user, we need to update it in constants.py and the database/dbhandler.py
5. Added functionality to check a nature's multiplier on a given stat
6. Started work on items so that PokemonInstances will be able to hold items
7. Added properties to PokemonInstance such as max_hp, attack, defense which we will use when calculating damage

Now, for the subject of this blog post.
Long calculations.
Like, look at the formula I came across on bulbapedia
https://wikimedia.org/api/rest_v1/media/math/render/svg/1060a70e3654dc4072b0080df660e4cd8731cb5e

ITS SO MASSIVE

Implementing calculations like this is difficult and unreadable. So, instead of doing something stupid like:

```py
def calculate_stat(self, bs, iv, ev):
    stat = math.floor((math.floor((2 * bs + iv + math.floor(ev/4)) * self.level / 100) + 5) * get_nature_mul(self.nature, abstracts.Stat.ATTACK))
    return stat
```

That's so unreadable. If I missed the pesky +5 in there, I wouldn't find it until forever. So, we split our calculations into steps, like a sane person. We'll make a variable for basically every bracket. So we get, 

```py
    def calculate_stat(self, nature, ev, iv, bs):
        a = math.floor(ev / 4)
        b = 2 * bs + iv + a
        c = math.floor(b * self.level / 100) + 5
        d = math.floor(c * nature)
        return d
```

Notice the immensely increased readability? Also notice how we got ride of the get_nature_mul because we'll just call it before we call calculate_stat. If you think about it, this just like how people structure code into different files/directories, just on a smaller scale. Both play the same purpose. Theoretically, every piece of code in a massive library could lie in the same file. But it doesn't.

Readability counts.