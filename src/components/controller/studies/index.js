// screenshots
import GSAInventory_sc from "./screenshots/GSAInventory.png";
import SPReport_sc from "./screenshots/SAOPAULO_COMPILED_WEB.png";
import LVCapture_sc from "./screenshots/gistutorial_landvaluecapture.png";
import SitingTurbines_sc from "./screenshots/gistutorial_sitingturbines.png";
import SemEdu_sc from "./screenshots/sem_edu_model.png";
import WBDataViz_sc from './screenshots/wb_datavizexamples.png'

// links 
import GSAInventory from "./GSAInventory.pdf";
import SPReport from "./SAOPAULO_COMPILED_WEB.pdf";
import LVCapture from "./gistutorial_landvaluecapture.pdf";
import SitingTurbines from "./gistutorial_sitingturbines.pdf";
import SemEdu from "./sem_edu_model.pdf";
import WBDataViz from './wb_datavizexamples.pdf'


const studies = {
  'Indonesian Urbanization': {
    image: WBDataViz_sc,
    descr: `These pieces were part of an urban economic study I worked with a team of graphic designers at the World Bank.`,
    link: WBDataViz,
    sub_title: 'world bank',
    lower_icons: ['r', 'arcgis', 'illustrator', 'indesign']
  },
    'Social Housing in Sao Paulo': {
    image: SPReport_sc,
    descr: `This plan was the output of a Sao Paolo Social Housing Studio focused on development strategies for the Brazilian inner city neighborhood of Nova Luz. The report was presented as a consultation for AECOM. The neighborhood was centrally located and a prime focus for urban development projects, but it was also the refuge of a large population of poor and marginalized populations. The plan attempted to present a model for development that balanced the provision of supportive services while abetting modern dense housing development for the area. `,
    link: SPReport,
    sub_title: 'UPenn',
    lower_icons: ['r', 'illustrator', 'indesign', 'arcgis', 'rhino']
  },
  'Educational Dev in Semarang': {
    image: SemEdu_sc,
    descr: `This study attempted to model academic achievement in Semarang, a large city in Indonesia. The report was intended to inform a larger study on infrastructure in the city being done by the World Bank.`,
    link: SemEdu,
    sub_title: 'world bank',
    lower_icons: ['r', 'illustrator', 'indesign', 'arcgis', 'rhino']
  },
  'GSA Inventory': {
    image: GSAInventory_sc,
    descr: `This was a small component of a larger study of demand for commercial space that I made that I felt was particularly well designed. `,
    link: GSAInventory,
    sub_title: 'bae',
    logo_only: true,
    lower_icons: ['r', 'arcgis', 'illustrator', 'indesign']
  },
  'Land Value Capture Model': {
    image: LVCapture_sc,
    descr: `This tutorial outlines the basic logic and methods used to build a land value capture framework to model potential tax revenue to be earned by building a line of transit.`,
    link: LVCapture,
    sub_title: 'Tutorial',
    lower_icons: ['arcgis', 'illustrator', 'indesign']
  },
  'Locating Wind Turbines': {
    image: SitingTurbines_sc,
    descr: `This tutorial walks through the steps of building a suitability map for the placement of wind turbines. The approach uses raster imagery and calculations to arrive at the final suitability map.`,
    link: SitingTurbines,
    sub_title: 'Tutorial',
    lower_icons: ['arcgis', 'illustrator', 'indesign']
  },
  
 



  





};

export default studies;
