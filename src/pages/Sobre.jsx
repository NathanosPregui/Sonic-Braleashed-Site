import React from "react";
import Logosite2 from "../assets/logo/Logo2.png";

export const Sobre = () => {
  return (
    <>
      <div className="sobre__titulologo">
        <img src={Logosite2} alt="" />
      </div>
      <div className="sobre__text">
        <p>
          No dia <strong>1º de março de 2025</strong>, aconteceu um momento
          histórico para a comunidade de fãs: o grupo <strong>Hedge-Dev</strong>{" "}
          lançou um port não oficial de <strong>Sonic Unleashed</strong> para
          PC, chamado <em>Unleashed Recompiled</em>. Esse jogo marcou a infância
          de muita gente, especialmente aqui no Brasil.
        </p>

        <p className="sobre__link">
          Pensando nisso, o{" "}
          <a href="https://www.youtube.com/@CulturaSonic/videos">
            <strong>Cultura Sonic</strong>
          </a>{" "}
          está desenvolvendo o projeto de tradução{" "}
          <strong>Sonic Braleashed</strong>, que vai contar com{" "}
          <strong>textos em português e dublagem completa! </strong>
          Temos uma equipe incrível trabalhando nisso, e esperamos que vocês
          gostem muito do resultado!
        </p>
      </div>
    </>
  );
};
