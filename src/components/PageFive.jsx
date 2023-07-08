import React, { useState } from "react";
import line from "../assets/line.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const PageFive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "CryptoKitty #123",
      description: "A cute digital cat with unique traits and characteristics.",
      image1:
        "https://bitcoinexchangeguide.com/wp-content/uploads/2018/09/CryptoKitty-Breaks-Record-With-Most-Expensive-Collectible-Sold-At-600-ETH.jpg",
      image2:
        "https://th.bing.com/th/id/OIP.rQBrzITGkShYmYHDdl4k5QHaDl?pid=ImgDet&rs=1",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.q-jIW2pVCgnkY52RP3lhFAAAAA?pid=ImgDet&rs=1",
    },
    {
      id: 2,
      title: "CyberPunk 2077 Avatar",
      description:
        "A digital avatar inspired by the CyberPunk 2077 video game.",
      image1:
        "https://th.bing.com/th/id/OIP.fC3Zbq4VPpLFH-v3oObJUAHaEc?pid=ImgDet&rs=1",
      image2: "https://avatarfiles.alphacoders.com/190/thumb-1920-190973.jpg",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      image3: "https://avatarfiles.alphacoders.com/241/241056.jpg",
    },
    {
      id: 3,
      title: "Digital Artwork - Abstract",
      description: "An abstract digital artwork created by a renowned artist.",
      image1:
        "https://th.bing.com/th/id/OIP.kX4RlErnCpB9fGXhPkGrbAHaEo?pid=ImgDet&rs=1",
      image2:
        "https://th.bing.com/th/id/OIP.hxOytDA47jInV5Zi_FIqHwHaEK?pid=ImgDet&rs=1",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.xoIpCj_mLy483Cgd7k_zZQHaEo?pid=ImgDet&w=1920&h=1200&rs=1",
    },
    {
      id: 4,
      title: "NFT Music Album - 'Digital Symphony'",
      description:
        "An exclusive music album released as an NFT, featuring electronic symphony tracks.",
      image1:
        "https://png.pngtree.com/thumb_back/fw800/background/20220225/pngtree-blue-digital-abstract-nft-background-image_1035710.jpg",
      image2:
        "https://ih1.redbubble.net/image.3770249919.5712/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
      image3:
        "https://nft-meta-info.com/wp-content/uploads/2022/03/top-nft-mfer.png",
    },
    {
      id: 5,
      title: "Virtual Real Estate - 'Metaverse Mansion'",
      description:
        "Own a virtual mansion in the Metaverse, complete with customizable interiors and breathtaking views.",
      image1:
        "https://th.bing.com/th/id/OIP.hk59xpaoZVaNnd2sV-CqXQHaEK?pid=ImgDet&rs=1",
      image2:
        "https://royexmetaverse.com/media/4tqp2kzt/metaverse-home-tour-app.png",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
      image3:
        "https://images.surfacemag.com/app/uploads/2021/03/30034718/krista-kim-mars-house-hero.jpg",
    },
    {
      id: 6,
      title: "Sports NFT - 'Legendary Basketball Moment'",
      description:
        "Relive a legendary basketball moment captured as an NFT, featuring a game-winning shot.",
      image1:
        "https://i.pinimg.com/originals/a3/d8/09/a3d809fab2d976b342be0e417176ea0d.jpg",
      image2:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/nft-non-fungible-token-baller-basketball-organicfoodempire.jpg",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.ueqaWXXdT7PDkd5Op9z7XwHaE8?pid=ImgDet&rs=1",
    },
    {
      id: 7,
      title: "NFT Collectible - 'Ancient Mythical Creature'",
      description:
        "Collect a rare and ancient mythical creature as an NFT, showcasing its rich history and folklore.",
      image1:
        "https://www.gizmotimes.com/wp-content/uploads/2022/02/Mythical-Creatures-Phoenix.png",
      image2:
        "https://i.pinimg.com/originals/75/3a/7c/753a7c550e8100cb2592014be7d6121e.jpg",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
      image3:
        "https://i.pinimg.com/originals/c5/99/0c/c5990c94736a359d50bfb96802540a44.jpg",
    },
    {
      id: 8,
      title: "Virtual Fashion - 'Digital Couture Dress'",
      description:
        "Wear a stunning digital couture dress in virtual fashion shows and social events.",
      image1: "https://www.iiad.edu.in/wp-content/uploads/2021/07/image1-2.jpg",
      image2:
        "https://th.bing.com/th/id/OIP.Youl3VsSEVcTCYxbDdae-AHaEI?pid=ImgDet&rs=1",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
      image3:
        "https://spiritllewellyn.files.wordpress.com/2014/05/snapshot_011-2048x2048.jpg?w=1300",
    },
    {
      id: 9,
      title: "NFT Gaming Item - 'Legendary Sword'",
      description:
        "Acquire a legendary sword as an NFT, granting you exclusive powers in a popular online game.",
      image1: "https://miro.medium.com/max/1104/1*Ks6A6UJ9inrs6hOBLK7wQw.jpeg",
      image2:
        "https://www.bungie.net/common/destiny2_content/screenshots/4203034886.jpg",
      profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
      image3:
        "https://123free3dmodels.com/media/2019/11/Legendary-Sword-3D-Model.jpeg",
    },
    {
      id: 10,
      title: "Virtual Pet - 'Digital Companion'",
      description:
        "Adopt a loyal and interactive digital companion as your virtual pet.",
      image1:
        "https://image.winudf.com/v2/image/Y29tLm15dmlydHVhbHBldGdhbWUudGFsa2luZ3BldF9zY3JlZW5fNV8xNTM2MzQwMTkxXzA5Ng/screen-5.jpg?fakeurl=1",
      image2:
        "https://image.winudf.com/v2/image/Y29tLm15dmlydHVhbHBldGdhbWUudGFsa2luZ3BldF9zY3JlZW5fNV8xNTM2MzQwMTkxXzA5Ng/screen-5.jpg?fakeurl=1",
      profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
      image3:
        "https://image.winudf.com/v2/image/Y29tLm15dmlydHVhbHBldGdhbWUudGFsa2luZ3BldF9zY3JlZW5fNV8xNTM2MzQwMTkxXzA5Ng/screen-5.jpg?fakeurl=1",
    },
    {
      id: 11,
      title: "NFT Photography - 'Nature's Beauty'",
      description:
        "Capture the mesmerizing beauty of nature through a series of stunning NFT photographs.",
      image1:
        "https://th.bing.com/th/id/OIP.x47oX616RnkkoDWYCzNkVAHaDH?pid=ImgDet&rs=1",
      image2:
        "https://th.bing.com/th/id/OIP.pkHBVTAcN0Ar3mAQlh_-nAHaHa?pid=ImgDet&rs=1",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.Uiaq3jAg8fsn3UlGymzPSwHaHa?pid=ImgDet&rs=1",
    },
    {
      id: 12,
      title: "Virtual Concert Ticket - 'Live Music Experience'",
      description:
        "Get exclusive access to a virtual concert featuring your favorite artist, complete with backstage footage.",
      image1:
        "https://th.bing.com/th/id/OIP.wsl7vS6SCreOCaxbIxknMQAAAA?pid=ImgDet&rs=1",
      image2:
        "https://images.template.net/wp-content/uploads/2018/09/Modern-Music-Concert-Ticket-Template.jpg",
      profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
      image3:
        "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Music-Concert-Event-Ticket-Design-scaled.jpg",
    },
    {
      id: 13,
      title: "Digital Land - 'Future City Plot'",
      description:
        "Invest in a prime digital land plot within a futuristic virtual city, ripe with opportunities.",
      image1:
        "https://blog.bizverse.world/wp-content/uploads/2022/04/What-is-Land-NFT.jpg",
      image2:
        "https://nftecocity.files.wordpress.com/2022/01/back_buildingsnames.png?w=2048",
      profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.9LdIaKJnoPv63Uvp76eJowHaE7?pid=ImgDet&rs=1",
    },
    {
      id: 14,
      title: "NFT Comic Art - 'Superhero Origins'",
      description:
        "Immerse yourself in a captivating comic art series depicting the origins of legendary superheroes.",
      image1:
        "https://th.bing.com/th/id/OIP.IhAAqTUNhELZJ22CAWAHswHaD4?pid=ImgDet&rs=1",
      image2:
        "https://th.bing.com/th/id/OIP.Ahym3SUt14LcJQNiM6OYVwHaHa?pid=ImgDet&rs=1",
      profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.Hax2EA9T-m74ArTh4COWbwHaHa?pid=ImgDet&rs=1",
    },
    {
      id: 15,
      title: "Virtual Car - 'Speedster 5000'",
      description:
        "Drive a futuristic and high-performance virtual car in immersive virtual racing games.",
      image1:
        "https://th.bing.com/th/id/OIP.uN1OO5zKWg2c0jShrbw08QHaEc?pid=ImgDet&rs=1",
      image2:
        "https://i.pinimg.com/originals/d9/15/66/d9156646930286fd44b45900be6c8647.jpg",
      profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
      image3:
        "https://coolmaterial.com/wp-content/uploads/2018/04/The-La-Bandita-Speedster-Is-the-First-3D-Printed-Car-Designed-in-Virtual-Reality-1-768x461.jpg",
    },
    {
      id: 16,
      title: "NFT Film Poster - 'Mystic Journey'",
      description:
        "Own a limited-edition film poster for an enchanting fantasy movie captured as an NFT.",
      image1:
        "https://www.nftmarketfeed.com/wp-content/uploads/2022/05/What-Font-Do-They-Use-For-Movie-Poster-Credits.jpg",
      image2:
        "https://i.pinimg.com/736x/d5/6a/9a/d56a9a0ae24f0b350a009a45b79f78ca.jpg",
      profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
      image3:
        "https://i.pinimg.com/originals/41/4f/b5/414fb5c408607cdf13f9c560923520e5.jpg",
    },
    {
      id: 17,
      title: "Virtual Reality Experience - 'Underwater Adventure'",
      description:
        "Embark on an immersive virtual reality journey into the depths of the ocean for a thrilling underwater adventure.",
      image1:
        "https://creativereview.imgix.net/content/uploads/2017/07/01.1_Odyssey.jpg",
      image2: "https://vrgamecritic.com/images/games/bg/1462-main-bg.jpg",
      profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
      image3:
        "https://showbird.com/images/didiusers/11145/acts/9963/thumbs/768x432_Virtual_Reality_Underwater_Experience.5d9dc4732b694.jpg",
    },
    {
      id: 18,
      title: "NFT Sports Memorabilia - 'Legendary Football Jersey'",
      description:
        "Own a piece of sports history with a legendary football jersey worn by an iconic player, captured as an NFT.",
      image1:
        "https://specials-images.forbesimg.com/imageserve/60881835f58f4c0a0353b057/960x0.jpg?fit=scale",
      image2:
        "https://th.bing.com/th/id/R.59bdb2aecc1cfff503b5e74e18a3caeb?rik=8FRJsZfzICQMbA&riu=http%3a%2f%2fs3.amazonaws.com%2fnikeinc%2fassets%2f28587%2fFINAL_ClintDempseyFullBody_large.jpg%3f1396351845&ehk=2s5rqUklQ7nNQaTaarYVK9M27do9lD0F0wqYqpkp8sM%3d&risl=&pid=ImgRaw&r=0",
      profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.V85ioB8vHrcGMWl2DWJCHAHaE7?pid=ImgDet&rs=1",
    },
    {
      id: 19,
      title: "Digital Sculpture - 'Abstract Masterpiece'",
      description:
        "Admire and collect a mesmerizing abstract digital sculpture created by a renowned artist.",
      image1:
        "https://i.pinimg.com/originals/21/dd/86/21dd862ef33bd2baccb59889b06b65fd.jpg",
      image2:
        "https://i.pinimg.com/736x/24/f3/f9/24f3f93fd36306748f9e4767929cbdcf.jpg",
      profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
      image3:
        "https://th.bing.com/th/id/OIP.coCcHK6-AkNbaGR3pAQfDAHaHa?pid=ImgDet&rs=1",
    },
    {
      id: 20,
      title: "NFT Fashion Accessory - 'Digital Sunglasses'",
      description:
        "Accessorize your virtual avatar with stylish digital sunglasses, setting new trends in the metaverse.",
      image1:
        "https://th.bing.com/th/id/OIP.jx5z508RAY5Ojkkw9n9q7AHaEK?pid=ImgDet&rs=1",
      image2:
        "https://th.bing.com/th/id/OIP.EyJWo7PisIYrhTvlTdZ-ZAHaEo?pid=ImgDet&rs=1",
      profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
      image3:
        "https://1.bp.blogspot.com/-rJp-x818MoU/XpD6XB0P50I/AAAAAAAADQ4/dUdy18oCiX0c-lQB6gIAoFMvFDymOs1dwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Digital%2BDisplay%2BSunglasses.gif",
    },
  ];

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleViewAll = () => {
    console.log("View All");
  };

  return (
    <div className="page-five">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
              <h2
                className="text-center text-lg-start"
                style={{width:"23rem"}}
              >
                Hot Collections
              </h2>
              <div className="dot-line d-flex align-items-center">
                <img src={line} alt="line" style={{ maxWidth: "90%" }} />
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                <button
                  className="btn btn-outline-dark me-2 rounded-circle bg-light"
                  onClick={handlePrevious}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className="btn btn-outline-dark me-2 rounded-circle bg-light"
                  onClick={handleNext}
                >
                  <FaArrowRight />
                </button>
                <button
                  className="btn btn-outline-dark"
                  style={{ width: "150px" }}
                  onClick={handleViewAll}
                >
                  View All <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-center">
          {visibleCards.map((card) => (
            <div className="col-md-4 col-lg-3 mb-4 text-center" key={card.id}>
              <div className="card border-primary text-light bg-dark">
                <img
                  src={card.image1}
                  alt={card.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={card.image2}
                      alt={card.title}
                      className="rounded img-thumbnail"
                      style={{ width: "33%", height: "33%" }}
                    />
                    <img
                      src={card.profilePic}
                      alt="Profile Picture"
                      className="rounded-circle profile-pic"
                      style={{ width: "20%", height: "auto" }}
                    />
                    <img
                      src={card.image3}
                      alt={card.title}
                      className="rounded img-thumbnail"
                      style={{ width: "33%", height: "33%" }}
                    />
                  </div>
                  <div className="mt-3">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageFive;
