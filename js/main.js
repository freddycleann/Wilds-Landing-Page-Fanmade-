document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', function() {
    navbar.classList.add('open');
  });

  closeMenu.addEventListener('click', function() {
    navbar.classList.remove('open');
  });

  document.querySelectorAll('.section-buttons button').forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.weapon-icon').forEach(icon => {
    icon.addEventListener('click', function() {

      const weaponData = {
        greatsword: {
          name: "Greatsword",
          desc: "Heavy and powerful. Charge up for devastating strikes and clash with your enemies with great force.",
          img: "img/greatsword.png",
          video: "https://www.youtube.com/embed/t2h3Uxj7nNg"
        },
        longsword: {
          name: "Longsword",
          desc: "Fast, fluid, and precise. Unleash a series of elegant strikes to overwhelm your foes.",
          img: "img/longsword.webp",
          video: "https://www.youtube.com/embed/RmP9QFeGbl4"
        },
        dualblades: {
          name: "Dual Blades",
          desc: "Swift and relentless. Slash through monsters with rapid strikes.",
          img: "img/dualblades.png",
          video: "https://www.youtube.com/embed/FvX367QFb9o"
        },
        sns: {
          name: "Sword & Shield",
          desc: "Balanced and versatile. Defend and counterattack seamlessly.",
          img: "img/swordnshield.png",
          video: "https://www.youtube.com/embed/HaAhlupvKzU"
        },
        hammer: {
          name: "Hammer",
          desc: "Crush with power. Stun monsters with heavy, bone-crushing blows.",
          img: "img/hammer1.webp",
          video: "https://www.youtube.com/embed/1SVhAsgES1k"
        },
        switchaxe: {
          name: "Switch Axe",
          desc: "Transformative and deadly. Switch between axe and sword modes mid-combat.",
          img: "img/switchaxe.png",
          video: "https://www.youtube.com/embed/toi52e8Lf0U"
        },
        huntinghorn: {
          name: "Hunting Horn",
          desc: "Supportive and impactful. Buff your team while unleashing mighty notes.",
          img: "img/huntinghorn.webp",
          video: "https://www.youtube.com/embed/2gXz5-608Ns"
        },
        lance: {
          name: "Lance",
          desc: "Sturdy and precise. Block attacks and deliver sharp thrusts.",
          img: "img/lance2.webp",
          video: "https://www.youtube.com/embed/9cd2dIa1DKk"
        },
        gunlance: {
          name: "Gunlance",
          desc: "Explosive and armored. Combine lance thrusts with explosive shells.",
          img: "img/gunlance.webp",
          video: "https://www.youtube.com/embed/Azn6r5wTd48"
        },
        insectglaive: {
          name: "Insect Glaive",
          desc: "Agile and acrobatic. Command a kinsect to boost your aerial combat.",
          img: "img/insect.webp",
          video: "https://www.youtube.com/embed/8wV7lPVW8q4"
        },
        chargeblade: {
          name: "Charge Blade",
          desc: "Dynamic and versatile. Shift between sword and shield and axe modes fluidly.",
          img: "img/charge1.webp",
          video: "https://www.youtube.com/embed/QrSKxNHCliA"
        },
        lightbowgun: {
          name: "Light Bowgun",
          desc: "Fast and nimble. Deliver rapid-fire shots with agility.",
          img: "img/lbg.webp",
          video: "https://www.youtube.com/embed/laJFEKB0gMA"
        },
        heavybowgun: {
          name: "Heavy Bowgun",
          desc: "Powerful and heavy. Rain down destructive firepower on your targets.",
          img: "img/hbg.webp",
          video: "https://www.youtube.com/embed/ZcjGwUo8vjE"
        },
        bow: {
          name: "Bow",
          desc: "Graceful and precise. Strike with arrows in a ballet of destruction.",
          img: "img/bow.webp",
          video: "https://www.youtube.com/embed/6D0x3KLl8jA"
        }
      };

      let weapon = this.dataset.weapon;
      document.getElementById('weapon-name').innerText = weaponData[weapon].name;
      document.getElementById('weapon-description').innerText = weaponData[weapon].desc;
      document.getElementById('hunter-image').src = weaponData[weapon].img;
      document.getElementById('weapon-video').src = weaponData[weapon].video;

      weaponDetail.classList.add('active');

      document.getElementById('weapon-detail').scrollIntoView({ behavior: 'smooth' });
      weaponDetail.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const sections = document.querySelectorAll('section');
  const observerOptions = {
    threshold: 0.6
  };
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.6) {
        entry.target.classList.remove('inactive');
      } else {
        entry.target.classList.add('inactive');
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
});

document.getElementById("joinHuntButton").addEventListener("click", function () {
  const productSection = document.getElementById("products");
  productSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const defaultWeapon = "greatsword";

  const weaponData = {
    greatsword: {
      name: "Greatsword",
      desc: "Heavy and powerful. Charge up for devastating strikes and clash with your enemies with great force.",
      img: "img/greatsword.png",
      video: "https://www.youtube.com/embed/t2h3Uxj7nNg"
    }
  };

  document.getElementById('weapon-name').innerText = weaponData[defaultWeapon].name;
  document.getElementById('weapon-description').innerText = weaponData[defaultWeapon].desc;
  document.getElementById('hunter-image').src = weaponData[defaultWeapon].img;
  document.getElementById('weapon-video').src = weaponData[defaultWeapon].video;

  document.getElementById('weapon-detail').classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
  const musicToggle = document.getElementById('music-toggle');
  let isPlaying = false;

  function playMusic() {
      if (!isPlaying) {
          music.muted = false;
          music.volume = 0.5;
          music.play().then(() => {
              isPlaying = true;
              musicToggle.innerHTML = '<i class="bi bi-pause-fill"></i>';
          }).catch(error => {
              console.log("Autoplay Blocked", error);
          });
      }
  }

  document.addEventListener('click', function() {
      if (!isPlaying) {
          playMusic();
      }
  }, { once: true });

  musicToggle.addEventListener('click', function() {
      if (isPlaying) {
          music.pause();
          isPlaying = false;
          musicToggle.innerHTML = '<i class="bi bi-play-fill"></i>';
      } else {
          playMusic();
      }
  });

  document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
          music.pause();
          isPlaying = false;
          musicToggle.innerHTML = '<i class="bi bi-play-fill"></i>';
      }
  });
});

const regions = {
  windward: ["img/windward.jpg", "img/windward2.png", "img/windward3.png", "img/windward4.png"],
  scarlet: ["img/scarlet.jpg", "img/scarlet2.png", "img/scarlet3.png", "img/scarlet4.png"],
  oilwell: ["img/oilwell.jpg", "img/oilwell2.png", "img/oilwell3.png", "img/oilwell4.png"],
  ice: ["img/iceshard.jpg", "img/iceshard2.png", "img/iceshard3.png", "img/iceshard4.png"]
};

const imageContainer = document.getElementById("environment-image");
const regionButtons = document.querySelectorAll(".region-btn");
const subRegionButtonsContainer = document.getElementById("sub-region-buttons");

let currentImages = [];
let currentIndex = 0;
let slideshowInterval;

function changeRegion(region) {
  currentImages = regions[region];
  currentIndex = 0;

  subRegionButtonsContainer.innerHTML = "";
  subRegionButtonsContainer.classList.remove("hidden");

  currentImages.forEach((image, index) => {
    const btn = document.createElement("button");
    btn.textContent = `●`;
    btn.classList.add("sub-region-btn");
    btn.addEventListener("click", () => {
      changeImage(index);
      restartSlideshow();
    });
    subRegionButtonsContainer.appendChild(btn);
  });

  changeImage(0);

  startSlideshow();
}

function startSlideshow() {
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    changeImage(currentIndex);
  }, 4000);
}

function restartSlideshow() {
  clearInterval(slideshowInterval);
  startSlideshow();
}

function changeImage(index) {
  const imageUrl = currentImages[index];
  imageContainer.style.opacity = 0;
  setTimeout(() => {
    imageContainer.style.backgroundImage = `url(${imageUrl})`;
    imageContainer.style.opacity = 1;
  }, 300);
  currentIndex = index;
}

regionButtons.forEach(button => {
  button.addEventListener("click", function () {
    changeRegion(this.getAttribute("data-region"));
  });
});

changeRegion("windward");

const monsters = {
  arkveld: {
    name: 'Arkveld',
    description: 'A monster known among the commission as the White Wraith, described as having unique chain-like appendages extending from its wings. A species long thought to have been extinct, its ecology remains shrouded in mystery.',
    image: 'img/arkveld.png',
    roar: 'audio/arkveldroar.mp3',
  },
  goremagala: {
    name: 'Gore Magala',
    description: 'Monsters that drape themselves in their great wings, like a black overcoat. entering the aggressive Frenzy State. Their black scales can Frenzy other creatures as well, making them fearsome adversaries',
    image: 'img/goremagala.png',
    roar: 'audio/goreroar.mp3',
  },
  reydau: {
    name: 'Rey Dau',
    description: 'The flying wyvern that reigns supreme over the Windward Plains ecosystem. able to store, amplify, and discharge the storm heavy lightning to lethal effect. The fulgurite against its carapace emits a sound that puts every monster in the region on guard.',
    image: 'img/reydau.png',
    roar: 'audio/reydauroar.mp3',
  },
  doshaguma: {
    name: 'Doshaguma',
    description: "Fanged beasts that are sometimes seen traveling in packs. Ruggedly built and extremely aggressive, Doshaguma won't hesitate to throw everything they've got at enemies - even other small monsters.",
    image: 'img/doshaguma.png',
    roar: 'audio/doshagumaroar.mp3',
  },
  uthduna: {
    name: 'Uth Duna',
    description: 'The leviathan that reigns supreme over the Scarlet Forest ecosystem. It has adapted to water-rich environments . With ability to cloak itself with water, which it slams down with enough force to sweep away surrounding threats in the resulting wave.',
    image: 'img/uthduna.png',
    roar: 'audio/uthdunaroar.mp3',
  },
  nuudra: {
    name: 'Nu Udra',
    description: 'The cephalopod that reigns supreme over Oilwell Basin ecosystem. Usually, when sighted, Nu Udra is covered in oilsilt, but when enraged it will ignite the coating, transfiguring itself into a horror of flame.',
    image: 'img/nuudra.png',
    roar: 'audio/nuudraroar.mp3',
  },
  jindahaad: {
    name: 'Jin Dahaad',
    description: 'A leviathan that sits at the peak of the Iceshard Cliff ecosystem. It surrounds its massive form in cold temperatures via ridge-like cooling organs across its body; the frost its limbs produce doubles as a potent weapon and a way to travel along walls and floating rocks',
    image: 'img/jindahaad.png',
    roar: 'audio/jindahaadroar.mp3',
  },
};

const monsterImage = document.getElementById('monster-image');
const monsterName = document.getElementById('monster-name');
const monsterDescription = document.getElementById('monster-description');
const monsterRoar = document.getElementById('monster-roar');
const roarButton = document.getElementById('roar-button');

monsterRoar.src = monsters.doshaguma.roar;
monsterRoar.volume = 0.8;

function selectMonster(monsterKey) {
  const monster = monsters[monsterKey];

  monsterImage.style.opacity = 0;

  setTimeout(() => {
    monsterImage.src = monster.image;
    monsterImage.alt = monster.name;
    monsterName.innerText = monster.name;
    monsterDescription.innerText = monster.description;

    monsterRoar.src = monster.roar;

    monsterImage.onload = () => {
      monsterImage.style.opacity = 1;
    };
  }, 500);
}

roarButton.addEventListener('click', () => {
  if (monsterRoar.src) {
    monsterRoar.currentTime = 0;
    monsterRoar.play().catch(e => console.error('Sound error:', e));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const characters = document.querySelectorAll(".character");

  function checkScroll() {
      let triggerBottom = window.innerHeight * 0.8;
      characters.forEach((char) => {
          let charTop = char.getBoundingClientRect().top;
          if (charTop < triggerBottom) {
              char.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const systemData = {
    multiplayer: {
      title: "Multiplayer",
      description: "Hunt with your friends on any platform, supporting cross-platform features",
      image: "img/multiplayer.png",
    },
    clashing: {
      title: "Clashing",
      description: "Power Clashing with a monster to knock them off their ground!",
      image: "img/clash.gif",
    },
    seikret: {
      title: "Seikret",
      description: "Assist you in every hunt and give you a ride to every of your destination!",
      image: "img/seikret.png",
    },
  };

  const systemButtons = document.querySelectorAll(".system-btn");
  const systemTitle = document.getElementById("system-title");
  const systemDescription = document.getElementById("system-description");
  const systemImage = document.getElementById("system-image");

  systemButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-system");

      systemButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      systemTitle.textContent = systemData[selected].title;
      systemDescription.textContent = systemData[selected].description;
      systemImage.src = systemData[selected].image;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          backToTopBtn.classList.add("visible");
      } else {
          backToTopBtn.classList.remove("visible");
      }
  });

  backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");
  const landingSection = document.getElementById("landing");

  if (backToTopButton && landingSection) {
    backToTopButton.addEventListener("click", function () {
      landingSection.scrollIntoView({ behavior: "smooth" });
    });
  } else {
    console.error("Element not found: #back-to-top or #landing");
  }
});

