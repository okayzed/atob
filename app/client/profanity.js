var swears = [
  "anal",
  "anilingus",
  "arsehole",
  "ass",
  "asshole",
  "assmunch",
  "bastardo",
  "bastinado",
  "bbw",
  "beaver cleaver",
  "beaver lips",
  "bestiality",
  "bimbos",
  "birdlock",
  "bitch",
  "blue waffle",
  "blumpkin",
  "bondage",
  "brown showers",
  "bukkake",
  "bulldyke",
  "camel toe",
  "camgirl",
  "camslut",
  "camwhore",
  "carpet muncher",
  "carpetmuncher",
  "cleveland steamer",
  "clit",
  "cock",
  "cocksuck",
  "cum",
  "cumming",
  "cunnilingus",
  "cunt",
  "darkie",
  "date rape",
  "daterape",
  "deep throat",
  "deepthroat",
  "dick",
  "dildo",
  "dirty pillows",
  "dirty sanchez",
  "dog style",
  "doggie style",
  "doggiestyle",
  "doggy style",
  "doggystyle",
  "dolcett",
  "dominatrix",
  "dommes",
  "donkey punch",
  "double dong",
  "double penetration",
  "dp action",
  "eat my ass",
  "ecchi",
  "ejaculation",
  "eunuch",
  "faggot",
  "fecal",
  "felch",
  "fellatio",
  "feltch",
  "femdom",
  "figging",
  "fisting",
  "foot fetish",
  "fuck",
  "fudge packer",
  "fudgepacker",
  "futanari",
  "g-spot",
  "gang bang",
  "genitals",
  "goatcx",
  "goatse",
  "gokkun",
  "golden shower",
  "goo girl",
  "goregasm",
  "group sex",
  "guro",
  "hand job",
  "handjob",
  "hentai",
  "homoerotic",
  "honkey",
  "hooker",
  "hot chick",
  "how to kill",
  "how to murder",
  "huge fat",
  "jack off",
  "jail bait",
  "jailbait",
  "jerk off",
  "jigaboo",
  "jiggaboo",
  "jiggerboo",
  "jizz",
  "kike",
  "kinbaku",
  "kinkster",
  "kinky",
  "knobbing",
  "leather restraint",
  "leather straight jacket",
  "lemon party",
  "lovemaking",
  "make me come",
  "male squirting",
  "menage a trois",
  "milf",
  "missionary position",
  "motherfucker",
  "mound of venus",
  "mr hands",
  "muff diver",
  "muffdiving",
  "nambla",
  "nawashi",
  "negro",
  "neonazi",
  "nig nog",
  "nigga",
  "nigger",
  "nimphomania",
  "octopussy",
  "omorashi",
  "one cup two girls",
  "one guy one jar",
  "paedophile",
  "panties",
  "panty",
  "pedobear",
  "pedophile",
  "pegging",
  "penis",
  "phone sex",
  "piss pig",
  "pissing",
  "pisspig",
  "playboy",
  "pleasure chest",
  "pole smoker",
  "ponyplay",
  "poof",
  "poop chute",
  "poopchute",
  "prince albert piercing",
  "pthc",
  "pubes",
  "pussy",
  "queef",
  "raghead",
  "raging boner",
  "rape",
  "raping",
  "rapist",
  "rimjob",
  "rimming",
  "rosy palm",
  "rosy palm and her 5 sisters",
  "rusty trombone",
  "s&m",
  "sadism",
  "scat",
  "schlong",
  "scissoring",
  "semen",
  "shaved beaver",
  "shaved pussy",
  "shemale",
  "shibari",
  "shit",
  "shota",
  "shrimping",
  "slanteye",
  "slut",
  "smut",
  "snatch",
  "sodomize",
  "sodomy",
  "spic",
  "spooge",
  "spread legs",
  "strap on",
  "strapon",
  "strappado",
  "strip club",
  "style doggy",
  "suicide girls",
  "sultry women",
  "swastika",
  "swinger",
  "tainted love",
  "taste my",
  "tea bagging",
  "threesome",
  "throating",
  "tied up",
  "tight white",
  "tit",
  "titties",
  "titty",
  "tongue in a",
  "topless",
  "tosser",
  "towelhead",
  "tranny",
  "tribadism",
  "tub girl",
  "tubgirl",
  "tushy",
  "twat",
  "twink",
  "twinkie",
  "two girls one cup",
  "urethra play",
  "urophilia",
  "vagina",
  "violet wand",
  "wetback",
  "wrinkled starfish",
  "yaoi",
  "yellow showers",
  "yiffy",
  "zoophilia"
];

var SWEAR_REs = [];

_.each(swears, function(sw) {
  var re = new RegExp("\\b" + sw + "\(ed|ing|s|er\)?\\b", "gi");
  re.inner_length = sw.length;
  SWEAR_REs.push(re);
});

function sweep_text(el) {
  var context = el.nodeValue;
  _.each(SWEAR_REs, function(swr) {
    if (swr.test(context)) {
      context = context.replace(swr, "butt$1");
    }
  });

  el.nodeValue = context;

}

function clean_element(element) {
  element = $(element)[0];
  if (!element || !element.childNodes) {
    return;
  }
  recurse(element);
}

function recurse(element)
{
  if (element.childNodes.length > 0)
    for (var i = 0; i < element.childNodes.length; i++)
      recurse(element.childNodes[i]);

  if (element.nodeType == Node.TEXT_NODE && /\S/.test(element.nodeValue)) {
    sweep_text(element);
  }
}

module.exports = clean_element;