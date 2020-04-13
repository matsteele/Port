import GeniePortal from "./genie_portal.png";
import Prgny from "./prgny_placeholder.png";
import SemarangSample from "./semerang_school_catchments.png";
import HousingAnalysis from "./housing_analysis.png";
import HamInn from "./ham_inn.png";
import BuildingTemp from './building_temp.png'
import AccountManager from './account_manager.svg'
import CryptoTradingModel from './crypto_trading_model.png'



const dashboards = {
  'multifamily analysis': {
    image: HousingAnalysis,
    descr: `This housing analysis uses 'parallax scrolling' to feature key factors that do and do not explain why the urban housing market is broken. `,
    link: 'https://matsteele.github.io/multifamily_analysis/',
    code: 'https://github.com/matsteele/multifamily_analysis',
    sub_title: 'genus development partners',
    lower_icons: ['react', 'emotion', 'svg', 'indesign', 'illustrator']
  },
    'crypto trading model': {
    image: CryptoTradingModel,
    descr: `This model uses historic crypto trading data to show how gains could be made using multi-level multi-class predictive modeling built on gradient boosted trees, trading between crypto and in and out of crypto.`,
    link: 'https://crypto-trading-dashboard.herokuapp.com/',
    code: 'https://github.com/matsteele/crypto_trading_model',
    sub_title: 'metis',
    lower_icons: ['pandas', 'docker', 'postgresql', 'dash', 'plotly', 'scikitLearn' ]
  },
  // 'progeny placeholder': {
  //   image: Prgny,
  //   descr: `This placeholder is intended to showcase Progeny's planning documents and the economic analysis built from our slide deck. Further it provides a brief summary of our project and profiles of those involved. `,
  //   link: 'http://prgny.io/',
  //   code: 'https://github.com/prgny/progenyPlaceholder',
  //   sub_title: 'progeny',
  //   lower_icons: ['react', 'emotion', 'svg', 'indesign', 'illustrator']
  // },
  // 'genie portal': {
  //   image: GeniePortal,
  //   descr: `This was built as a prototype of a blockchain portal for managing equity tailored to real estate developers. The portal consisted of a dashboard for tracking the performance of the token, as well as an interface for showcasing existing and proposed dashboards. Each project had detailed information available, including a 3d rendering, cashflows, and a spatial analysis.`,
  //   link: 'http://www.genusdev.com/',
  //   code: 'https://github.com/GenusDev/genie-portal',
  //   sub_title: 'genus development partners',
  //   lower_icons: [
  //     'solidity',
  //     'truffle',
  //     'ganache',
  //     'web3',
  //     'react',
  //     'redux',
  //     'd3',
  //     'node',
  //     'infura',
  //     'sass',
  //     'webpack',
  //     'jest',
  //     'mocha',
  //     'express'
  //   ]
  // },

  'semarang schools': {
    image: SemarangSample,
    descr: `School catchment information in Semarang is inaccessible and conflicting. This project intended to showcase how the city could utilize a spatial overlay to visualize school catchment areas. Further, because the data was incomplete, a user could suggest an edit that could be validated and incorporated into the display. `,
    link: 'http://matsteele.github.io/SemarangSchools/',
    code:
      'https://github.com/matsteele/matsteele.github.io/tree/master/samples/SemarangSample',
    sub_title: 'world bank',
    lower_icons: ['javascript', 'html', 'css', 'd3', 'leaflet', 'mapbox']
  },
  'predicting building temperature': {
    image: BuildingTemp,
    descr: `This dashboard parses a csv of building energy data into meaningful sub categories and then makes predictions for each day and week using a color scheme in order to identify outliers. `,
    link: 'https://pd-challenge-steele.herokuapp.com/',
    code: 'https://github.com/matsteele/PD_Challenge',
    sub_title: '',
    lower_icons: ['python', 'dash', 'scikitLearn', 'd3']
  },
  'ham inn': {
    image: HamInn,
    descr: `This site provides information about Genus Development's first project, which was an inn in NY's Hamilton Heights neighborhood. `,
    link: 'https://matsteele.github.io/haminn/',
    code: 'https://github.com/matsteele/haminn',
    sub_title: 'genus development partners',
    lower_icons: ['javascript', 'sass', 'html']
  },
  'account manager': {
    image: AccountManager,
    descr: `This program uses pythons cryptopgraphy libraries to securely manage account information, including passwords. It also utilizes a scrapper that logs an automated monthly cashflow analysis to google sheets`,
    code: 'https://github.com/GenusDev/GenusAccountManagement',
    sub_title: 'genus development partners',
    lower_icons: ['python', 'pycrypto', 'googlesheets', 'selenium']
  }
};

export default dashboards;
