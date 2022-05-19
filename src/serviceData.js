import { GiFlowerEmblem } from '@react-icons/all-files/gi/GiFlowerEmblem'
import { GiMolecule } from '@react-icons/all-files/gi/GiMolecule'
import { GiChemicalTank } from '@react-icons/all-files/gi/GiChemicalTank'
import { GiMetalBar } from '@react-icons/all-files/gi/GiMetalBar'
import { GiChemicalDrop } from '@react-icons/all-files/gi/GiChemicalDrop'
import { GiMaterialsScience } from '@react-icons/all-files/gi/GiMaterialsScience'
import { GiChemicalBolt } from '@react-icons/all-files/gi/GiChemicalBolt'
import { FaMicroscope } from '@react-icons/all-files/fa/FaMicroscope'
import { FaWater } from '@react-icons/all-files/fa/FaWater'

export const serviceData = [
  {
    label: 'Cannabinoid Potency',
    icon: <GiFlowerEmblem />,
    path: 'cannabinoids',
    url: `/testing-services/cannabinoids`,
    description: `Cannabinoids are chemical compounds found in cannabis which have purported health benefits such as pain relief, stress reduction, and anti-inflammatory properties.`,
    longDescription: [
      `Cannabinoids are chemical compounds found in cannabis which have purported health benefits such as pain relief, stress reduction, and anti-inflammatory properties. Profile and potency testing of cannabis products is helpful for consumers to determine effective cannabinoid dosages. Without this testing it is impossible to understand and control the effects of cannabis products.`,
      `Our unique approach allows for an extensive analysis of a variety of samples, including flower, concentrates and vape cartridges, tinctures, edibles, and topicals. We test for 11 cannabinoids and report results as weight-based percentages. Cannabinoid analysis is performed with High Performance Liquid Chromatography (HPLC) using UV  detection. All results are quantitated against calibration curves prepared from certified reference standards.`,
    ],
  },
  {
    label: 'Terpene Profile',
    icon: <GiMolecule />,
    path: 'terpenes',
    url: `/testing-services/terpenes`,
    description: `Terpenes are aromatic compounds produced by many plants including cannabis. They can also be found in food, drugs, and alcohol.`,
    longDescription: [
      `Terpenes are aromatic compounds produced by many plants including cannabis. They can also be found in food, drugs, and alcohol. Many terpenes are believed to have physiological effects which influence the properties of cannabinoids.`,
      `Characterizing terpene content may be useful in determining these influences as well as personal preferences in cannabis products. Terpene analysis is performed using liquid injection Gas Chromatography with Mass Spectrometric detection (GC/MS).  All results are quantitated against calibration curves prepared from certified reference standards.`,
    ],
  },
  {
    label: 'Residual Solvents',
    icon: <GiChemicalDrop />,
    path: 'residual-solvents',
    url: `/testing-services/residual-solvents`,
    description: `Solvents are used in the production of concentrated cannabis products. Trace amounts of these solvents can have adverse health effects and must be removed at the end of the extraction process.`,
    longDescription: [
      `Solvents are used in the production of concentrated cannabis products. Trace amounts of these solvents can have adverse health effects and must be removed at the end of the extraction process.`,
      `Analysis is performed using Head-Space Gas Chromatography with Mass Spectrometric detection (HS-GC/MS). All results are quantitated against calibration curves prepared from certified reference standards.`,
    ],
  },
  {
    label: 'Pesticides',
    icon: <GiChemicalTank />,
    path: 'pesticides',
    url: `/testing-services/pesticides`,
    description: `There are many different pesticides and growth regulators used in agricultural processes including the cultivation of cannabis plants. These substances can be harmful above certain thresholds.`,
    longDescription: [
      `There are many different pesticides and growth regulators used in agricultural processes including the cultivation of cannabis plants. These substances can be harmful above certain thresholds.`,
      `It is important to test for these compounds to prevent adverse health effects. Analysis is performed with Ultra Performance Liquid Chromatography (UPLC) with data recorded using a triple-quad MS/MS detector.  All results are quantitated against calibration curves prepared from certified reference standards.`,
    ],
  },
  {
    label: 'Mycotoxins',
    icon: <FaMicroscope />,
    path: 'mycotoxins',
    url: `/testing-services/mycotoxins`,
    description: `Mycotoxins are toxic compounds that are naturally produced by certain types of molds. These molds are commonly found in soil, decaying vegetation, and grains. These substances can be harmful above certain thresholds.`,
    longDescription: [
      `Mycotoxins are toxic compounds that are naturally produced by certain types of molds. These molds are commonly found in soil, decaying vegetation, and grains. These substances can be harmful above certain thresholds.`,
      `Most mycotoxins are chemically stable and survive food processing which makes it extremely important to test for these compounds throughout the cannabis production cycle. Analysis is performed with Ultra Performance Liquid Chromatography (UPLC) with data recorded using a triple-quad MS/MS detector.  All results are quantitated against calibration curves prepared from certified reference standards.`,
    ],
  },
  {
    label: 'Heavy Metals',
    icon: <GiMetalBar />,
    path: 'heavy-metals',
    url: `/testing-services/heavy-metals`,
    description: `Cannabis plants can readily absorb heavy metals from soil and growth media. These elements have well-documented negative effects on human health and thus screening for heavy metals is important to ensure the safety of cannabis products.`,
    longDescription: [
      `Cannabis plants can readily absorb heavy metals from soil and growth media. These elements have well-documented negative effects on human health and thus screening for heavy metals is important to ensure the safety of cannabis products.`,
      `Analysis of heavy metals is performed using an Inductively Coupled Plasma Mass Spectrometer (ICP/MS).  All results are quantitated against calibration curves prepared from certified reference standards.`,
    ],
  },
  {
    label: 'Water Activity and Moisture Content',
    icon: <FaWater />,
    path: 'water-activity',
    url: `/testing-services/water-activity`,
    description: `Water activity is a measure of the free moisture in a product. The water activity of a product describes its ability to facilitate the growth of microorganisms.`,
    longDescription: [
      `Water activity is a measure of the free moisture in a product. The water activity of a product describes its ability to facilitate the growth of microorganisms.  A higher water activity leads to a greater potential for microbial contamination leading to product spoilage.`,
      `The simplest way to reduce free water (lower water activity) is with a process which drives off water, i.e. cooking, baking or dehydration. In cannabis this is known as curing. Water activity analysis is performed with a dew point moisture analyzer. `,
    ],
  },
  {
    label: 'Vitamin E Acetate',
    icon: <GiChemicalBolt />,
    path: 'vitamin-e-acetate',
    url: `/testing-services/vitamin-e-acetate`,
    description: `Vitamin E Acetate is a synthetic form of vitamin E which has been shown to be harmful if inhaled. It is a strong culprit of concern when used as an ingredient in vape cartridges and studies have linked it to pulmonary injuries.`,
    longDescription: [
      `Vitamin E Acetate is a synthetic form of vitamin E which has been shown to be harmful if inhaled. It is a strong culprit of concern when used as an ingredient in vape cartridges and studies have linked it to pulmonary injuries.`,
      `The state of Massachusetts now requires the testing of this substance. Analysis is performed with High Performance Liquid Chromatography (HPLC) using UV  detection. All results are quantitated against certified reference standards.`,
    ],
  },

  {
    label: 'Microbiological Contaminants',
    icon: <GiMaterialsScience />,
    path: 'microbials',
    url: `/testing-services/microbials`,
    description: `Microbial pathogens can contaminate water, food, air, and other environmental media such as cannabis. Due to the diversity of pathogens, it is important to test for a wide range of bacteria and fungi commonly found in the cultivation of cannabis.`,
    longDescription: [
      `Microbial pathogens can contaminate water, food, air, and other environmental media such as cannabis. Due to the diversity of pathogens, it is important to test for a wide range of bacteria and fungi commonly found in the cultivation of cannabis.`,
      `Certain pathogens require a more sensitive detection due to the dangers they pose. Analysis is performed with the Agilent AriaMX using Quantitative Polymerase Chain Reaction (qPCR).`,
    ],
  },
]
