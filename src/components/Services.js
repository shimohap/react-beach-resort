import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, laborum!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, laborum!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Service",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, laborum!",
      },
      {
        icon: <FaBeer />,
        title: "Beer On The House",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, laborum!",
      },
    ],
  };

  render() {
    return (
      <section>
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
