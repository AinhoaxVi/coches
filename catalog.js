/*
 * Catálogo técnico inicial para los modelos disponibles en MotorClaro.
 * Las franjas representan generaciones comerciales en España. Cada ficha
 * identifica combustible, potencia, cambio y los sistemas que condicionan
 * el diagnóstico. El código de motor sigue siendo el dato definitivo cuando
 * una misma denominación tuvo revisiones durante una generación.
 */
(function () {
  const P = (engine, power, boxes, extra = []) => ({ engine, power, boxes, fuel: "gasoline", extra });
  const D = (engine, power, boxes, extra = []) => ({ engine, power, boxes, fuel: "diesel", extra });
  const M = (engine, power, boxes, baseFuel = "gasoline", extra = []) => ({ engine, power, boxes, fuel: "mhev", baseFuel, extra: ["mhev48", "dcDc", ...extra] });
  const H = (engine, power, boxes, extra = []) => ({ engine, power, boxes, fuel: "hybrid", baseFuel: "gasoline", extra: ["hybridSystem", ...extra] });
  const PH = (engine, power, boxes, extra = []) => ({ engine, power, boxes, fuel: "phev", baseFuel: "gasoline", extra: ["hybridSystem", "plugIn", ...extra] });
  const E = (engine, power, boxes = ["1AT"], extra = []) => ({ engine, power, boxes, fuel: "electric", extra: ["tractionBattery", "electricDrive", ...extra] });

  const CATALOG = [
    ["SEAT", "Ibiza", [
      [2000, 2008, "6K/6L", P("1.4 MPI", 75, ["5MT"]), P("1.8 T 20V", 150, ["5MT"]), D("1.9 SDI", 64, ["5MT"]), D("1.9 TDI", 100, ["5MT"])],
      [2009, 2017, "6J", P("1.2 MPI", 70, ["5MT"]), P("1.2 TSI", 105, ["5MT", "7DSG"]), P("1.4 TSI", 150, ["7DSG"]), D("1.6 TDI", 90, ["5MT"]), D("2.0 TDI", 143, ["6MT"])],
      [2018, 2021, "KJ", P("1.0 MPI", 80, ["5MT"]), P("1.0 TSI", 95, ["5MT"]), P("1.0 TSI", 115, ["6MT", "7DSG"]), D("1.6 TDI", 95, ["5MT", "7DSG"])],
      [2022, 2026, "KJ restyling", P("1.0 MPI", 80, ["5MT"]), P("1.0 TSI", 95, ["5MT"]), P("1.0 TSI", 110, ["6MT", "7DSG"]), P("1.5 TSI", 150, ["7DSG"])]]],
    ["SEAT", "León", [
      [2000, 2005, "1M", P("1.6 MPI", 105, ["5MT"]), P("1.8 T 20V", 180, ["6MT"]), D("1.9 TDI", 110, ["5MT"]), D("1.9 TDI", 150, ["6MT"])],
      [2006, 2012, "1P", P("1.6 MPI", 102, ["5MT"]), P("1.4 TSI", 125, ["6MT"]), P("2.0 TFSI", 200, ["6MT", "6DSG"]), D("1.9 TDI", 105, ["5MT"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2013, 2020, "5F", P("1.2 TSI", 110, ["6MT"]), P("1.4 TSI", 150, ["6MT", "7DSG"]), P("1.5 TSI", 150, ["6MT", "7DSG"]), D("1.6 TDI", 115, ["5MT", "7DSG"]), D("2.0 TDI", 150, ["6MT", "7DSG"])],
      [2021, 2026, "KL", P("1.0 TSI", 110, ["6MT"]), P("1.5 TSI", 150, ["6MT"]), M("1.5 eTSI 48V", 150, ["7DSG"]), D("2.0 TDI", 150, ["7DSG"]), PH("1.4 e-HYBRID", 204, ["6DSG"]), PH("1.5 e-HYBRID", 204, ["6DSG"])]]],
    ["SEAT", "Toledo", [
      [2000, 2004, "1M", P("1.6 MPI", 105, ["5MT"]), P("1.8 20V T", 180, ["6MT"]), D("1.9 TDI", 110, ["5MT"]), D("1.9 TDI", 150, ["6MT"])],
      [2005, 2009, "5P", P("1.6 MPI", 102, ["5MT"]), P("2.0 FSI", 150, ["6MT"]), D("1.9 TDI", 105, ["5MT"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2012, 2019, "KG", P("1.2 TSI", 90, ["5MT"]), P("1.2 TSI", 110, ["6MT"]), P("1.4 TSI", 125, ["7DSG"]), D("1.6 TDI", 105, ["5MT", "7DSG"])]]],
    ["SEAT", "Ateca", [
      [2016, 2020, "KH7", P("1.0 TSI", 115, ["6MT"]), P("1.4 TSI ACT", 150, ["6MT", "7DSG"]), P("2.0 TSI", 190, ["7DSG"]), D("1.6 TDI", 115, ["6MT"]), D("2.0 TDI", 150, ["6MT", "7DSG"])],
      [2021, 2026, "KH7 restyling", P("1.0 TSI", 110, ["6MT"]), P("1.5 TSI", 150, ["6MT", "7DSG"]), P("2.0 TSI", 190, ["7DSG"]), D("2.0 TDI", 150, ["6MT", "7DSG"])]]],
    ["SEAT", "Arona", [
      [2017, 2021, "KJ7", P("1.0 TSI", 95, ["5MT"]), P("1.0 TSI", 115, ["6MT", "7DSG"]), P("1.5 TSI", 150, ["7DSG"]), D("1.6 TDI", 95, ["5MT", "7DSG"])],
      [2022, 2026, "KJ7 restyling", P("1.0 TSI", 95, ["5MT"]), P("1.0 TSI", 110, ["6MT", "7DSG"]), P("1.5 TSI", 150, ["7DSG"])]]],

    ["Volkswagen", "Golf", [
      [2000, 2003, "Golf IV", P("1.6", 105, ["5MT"]), P("1.8 T", 150, ["5MT"]), D("1.9 TDI", 110, ["5MT"]), D("1.9 TDI", 150, ["6MT"])],
      [2004, 2008, "Golf V", P("1.6 FSI", 115, ["6MT"]), P("1.4 TSI", 140, ["6MT", "6DSG"]), D("1.9 TDI", 105, ["5MT", "6DSG"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2009, 2012, "Golf VI", P("1.2 TSI", 105, ["6MT", "7DSG"]), P("1.4 TSI", 160, ["6MT", "7DSG"]), D("1.6 TDI", 105, ["5MT", "7DSG"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2013, 2019, "Golf VII", P("1.0 TSI", 115, ["6MT", "7DSG"]), P("1.5 TSI", 150, ["6MT", "7DSG"]), D("1.6 TDI", 115, ["5MT", "7DSG"]), D("2.0 TDI", 150, ["6MT", "7DSG"]), E("e-Golf", 136)],
      [2020, 2026, "Golf VIII", P("1.0 TSI", 110, ["6MT"]), P("1.5 TSI", 150, ["6MT"]), M("1.5 eTSI 48V", 150, ["7DSG"]), D("2.0 TDI", 150, ["7DSG"]), PH("1.4 eHybrid", 204, ["6DSG"]), PH("1.5 eHybrid", 204, ["6DSG"])]]],
    ["Volkswagen", "Polo", [
      [2000, 2008, "Polo 9N", P("1.2", 65, ["5MT"]), P("1.4", 75, ["5MT", "4AT"]), D("1.4 TDI", 80, ["5MT"]), D("1.9 TDI", 100, ["5MT"])],
      [2009, 2017, "Polo 6R/6C", P("1.2", 70, ["5MT"]), P("1.2 TSI", 105, ["6MT", "7DSG"]), P("1.4 TSI GTI", 180, ["7DSG"]), D("1.6 TDI", 90, ["5MT"]), D("1.4 TDI", 90, ["5MT", "7DSG"])],
      [2018, 2021, "Polo AW", P("1.0 MPI", 80, ["5MT"]), P("1.0 TSI", 95, ["5MT", "7DSG"]), P("1.0 TSI", 115, ["6MT", "7DSG"]), P("2.0 TSI GTI", 200, ["6DSG"])],
      [2022, 2026, "Polo AW restyling", P("1.0 MPI", 80, ["5MT"]), P("1.0 TSI", 95, ["5MT", "7DSG"]), P("1.0 TSI", 110, ["7DSG"]), P("2.0 TSI GTI", 207, ["7DSG"])]]],
    ["Volkswagen", "Passat", [
      [2000, 2005, "B5.5", P("1.8 T", 150, ["5MT", "5AT"]), P("2.0", 115, ["5MT"]), D("1.9 TDI", 130, ["6MT", "5AT"]), D("2.5 V6 TDI", 180, ["6MT", "5AT"])],
      [2006, 2010, "B6", P("1.4 TSI", 122, ["6MT", "7DSG"]), P("2.0 TFSI", 200, ["6MT", "6DSG"]), D("1.9 TDI", 105, ["5MT"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2011, 2014, "B7", P("1.4 TSI", 122, ["6MT", "7DSG"]), P("1.8 TSI", 160, ["7DSG"]), D("1.6 TDI", 105, ["6MT"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2015, 2023, "B8", P("1.5 TSI", 150, ["6MT", "7DSG"]), P("2.0 TSI", 190, ["7DSG"]), D("1.6 TDI", 120, ["6MT", "7DSG"]), D("2.0 TDI", 150, ["6MT", "7DSG"]), PH("GTE 1.4 TSI", 218, ["6DSG"])],
      [2024, 2026, "B9", M("1.5 eTSI 48V", 150, ["7DSG"]), D("2.0 TDI", 150, ["7DSG"]), PH("1.5 eHybrid", 204, ["6DSG"]), PH("1.5 eHybrid", 272, ["6DSG"])]]],
    ["Volkswagen", "Touran", [
      [2003, 2010, "1T1/1T2", P("1.6 FSI", 115, ["6MT"]), P("1.4 TSI", 140, ["6MT", "6DSG"]), D("1.9 TDI", 105, ["6MT", "6DSG"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2011, 2015, "1T3", P("1.2 TSI", 105, ["6MT"]), P("1.4 TSI", 140, ["6MT", "7DSG"]), D("1.6 TDI", 105, ["6MT", "7DSG"]), D("2.0 TDI", 140, ["6MT", "6DSG"])],
      [2016, 2026, "5T", P("1.0 TSI", 115, ["6MT"]), P("1.5 TSI", 150, ["6MT", "7DSG"]), D("1.6 TDI", 115, ["6MT", "7DSG"]), D("2.0 TDI", 150, ["6MT", "7DSG"])]]],
    ["Volkswagen", "Tiguan", [
      [2007, 2015, "5N", P("1.4 TSI", 150, ["6MT", "6DSG"]), P("2.0 TSI", 200, ["6DSG"]), D("2.0 TDI", 140, ["6MT", "7DSG"]), D("2.0 TDI", 170, ["6MT", "7DSG"])],
      [2016, 2020, "AD1", P("1.4 TSI", 150, ["6MT", "6DSG"]), P("1.5 TSI", 150, ["6MT", "7DSG"]), P("2.0 TSI", 190, ["7DSG"]), D("2.0 TDI", 150, ["6MT", "7DSG"])],
      [2021, 2023, "AD1 restyling", P("1.5 TSI", 150, ["6MT", "7DSG"]), D("2.0 TDI", 150, ["7DSG"]), PH("1.4 eHybrid", 245, ["6DSG"])],
      [2024, 2026, "Tiguan III", M("1.5 eTSI 48V", 150, ["7DSG"]), D("2.0 TDI", 150, ["7DSG"]), PH("1.5 eHybrid", 204, ["6DSG"]), PH("1.5 eHybrid", 272, ["6DSG"])]]],

    ["Renault", "Clio", [
      [2000, 2005, "Clio II", P("1.2 16V", 75, ["5MT"]), P("1.6 16V", 110, ["5MT", "4AT"]), D("1.5 dCi", 80, ["5MT"])],
      [2006, 2012, "Clio III", P("1.2 16V", 75, ["5MT"]), P("1.2 TCe", 100, ["5MT"]), P("2.0 Renault Sport", 200, ["6MT"]), D("1.5 dCi", 85, ["5MT"]), D("1.5 dCi", 105, ["6MT"])],
      [2013, 2019, "Clio IV", P("0.9 TCe", 90, ["5MT"]), P("1.2 TCe", 120, ["6EDC"]), D("1.5 dCi", 90, ["5MT", "6EDC"]), P("1.6 TCe R.S.", 200, ["6EDC"])],
      [2020, 2023, "Clio V", P("1.0 SCe", 65, ["5MT"]), P("1.0 TCe", 100, ["5MT", "CVT"]), D("1.5 Blue dCi", 100, ["6MT"]), H("E-Tech full hybrid 1.6", 145, ["Multi-mode"])],
      [2024, 2026, "Clio V restyling", P("1.0 SCe", 65, ["5MT"]), P("1.0 TCe", 90, ["6MT"]), P("1.0 TCe GLP", 100, ["6MT"], ["lpg"]), H("E-Tech full hybrid 1.6", 145, ["Multi-mode"])]]],
    ["Renault", "Mégane", [
      [2000, 2002, "Mégane I", P("1.6 16V", 110, ["5MT", "4AT"]), P("2.0 16V", 140, ["5MT"]), D("1.9 dTi", 100, ["5MT"]), D("1.9 dCi", 105, ["5MT"])],
      [2003, 2008, "Mégane II", P("1.6 16V", 115, ["5MT", "4AT"]), P("2.0 T Renault Sport", 225, ["6MT"]), D("1.5 dCi", 105, ["6MT"]), D("1.9 dCi", 130, ["6MT"])],
      [2009, 2015, "Mégane III", P("1.2 TCe", 115, ["6MT"]), P("1.4 TCe", 130, ["6MT"]), D("1.5 dCi", 110, ["6MT", "6EDC"]), D("1.6 dCi", 130, ["6MT"]), P("2.0 T R.S.", 265, ["6MT"])],
      [2016, 2021, "Mégane IV", P("1.2 TCe", 130, ["6MT", "7EDC"]), P("1.3 TCe", 140, ["6MT", "7EDC"]), D("1.5 Blue dCi", 115, ["6MT", "7EDC"]), D("1.6 dCi", 130, ["6MT"]), PH("E-Tech plug-in 1.6", 160, ["Multi-mode"])],
      [2022, 2026, "Mégane E-Tech", E("EV40", 130), E("EV60", 220)]]],
    ["Renault", "Scénic", [
      [2000, 2003, "Scénic I", P("1.6 16V", 110, ["5MT", "4AT"]), P("2.0 16V", 140, ["5MT"]), D("1.9 dCi", 105, ["5MT"])],
      [2004, 2008, "Scénic II", P("1.6 16V", 115, ["5MT"]), P("2.0 T", 165, ["6MT"]), D("1.5 dCi", 105, ["6MT"]), D("1.9 dCi", 130, ["6MT"])],
      [2009, 2015, "Scénic III", P("1.2 TCe", 115, ["6MT"]), P("1.4 TCe", 130, ["6MT"]), D("1.5 dCi", 110, ["6MT", "6EDC"]), D("1.6 dCi", 130, ["6MT"])],
      [2016, 2023, "Scénic IV", P("1.3 TCe", 140, ["6MT", "7EDC"]), P("1.3 TCe", 160, ["7EDC"]), D("1.5 Blue dCi", 115, ["6MT", "7EDC"]), D("1.7 Blue dCi", 150, ["6EDC"])],
      [2024, 2026, "Scénic E-Tech electric", E("EV60", 170), E("EV87", 220)]]],
    ["Renault", "Captur", [
      [2013, 2019, "Captur I", P("0.9 TCe", 90, ["5MT"]), P("1.2 TCe", 120, ["6EDC"]), P("1.3 TCe", 150, ["6EDC"]), D("1.5 dCi", 90, ["5MT", "6EDC"])],
      [2020, 2023, "Captur II", P("1.0 TCe", 100, ["5MT"]), P("1.3 TCe", 140, ["6MT", "7EDC"]), D("1.5 Blue dCi", 115, ["6MT", "7EDC"]), H("E-Tech full hybrid", 145, ["Multi-mode"]), PH("E-Tech plug-in", 160, ["Multi-mode"])],
      [2024, 2026, "Captur II restyling", P("1.0 TCe GLP", 100, ["6MT"], ["lpg"]), P("1.3 TCe", 140, ["6MT", "7EDC"]), M("1.3 mild hybrid 48V", 160, ["7EDC"]), H("E-Tech full hybrid", 145, ["Multi-mode"])]]],

    ["Hyundai", "i20", [
      [2008, 2014, "PB", P("1.2 MPI", 85, ["5MT"]), P("1.4 MPI", 100, ["5MT", "4AT"]), D("1.4 CRDi", 90, ["6MT"]), D("1.6 CRDi", 115, ["6MT"])],
      [2015, 2020, "GB", P("1.2 MPI", 84, ["5MT"]), P("1.0 T-GDi", 100, ["5MT", "7DCT"]), P("1.0 T-GDi", 120, ["6MT", "7DCT"]), D("1.4 CRDi", 90, ["6MT"])],
      [2021, 2023, "BC3", P("1.2 MPI", 84, ["5MT"]), P("1.0 T-GDi", 100, ["6MT", "7DCT"]), M("1.0 T-GDi 48V", 100, ["6iMT", "7DCT"]), P("1.6 T-GDi N", 204, ["6MT"])],
      [2024, 2026, "BC3 restyling", P("1.2 MPI", 79, ["5MT"]), P("1.0 T-GDi", 100, ["6MT", "7DCT"]), P("1.6 T-GDi N", 204, ["6MT"])]]],
    ["Hyundai", "i30", [
      [2007, 2011, "FD", P("1.4 MPI", 109, ["5MT"]), P("1.6 MPI", 126, ["5MT", "4AT"]), D("1.6 CRDi", 90, ["5MT"]), D("1.6 CRDi", 115, ["6MT"])],
      [2012, 2017, "GD", P("1.4 MPI", 100, ["6MT"]), P("1.6 GDi", 135, ["6MT", "6DCT"]), P("1.6 T-GDi Turbo", 186, ["6MT"]), D("1.6 CRDi", 110, ["6MT", "7DCT"]), D("1.6 CRDi", 136, ["6MT", "7DCT"])],
      [2018, 2020, "PD / N Line", P("1.0 T-GDi", 120, ["6MT"]), P("1.4 T-GDi", 140, ["6MT", "7DCT"]), D("1.6 CRDi", 116, ["6MT", "7DCT"]), D("1.6 CRDi", 136, ["6MT", "7DCT"]), P("2.0 T-GDi N", 275, ["6MT"])],
      [2021, 2023, "PD restyling", P("1.5 DPI", 110, ["6MT"]), M("1.0 T-GDi 48V", 120, ["6iMT", "7DCT"]), M("1.5 T-GDi 48V", 160, ["6iMT", "7DCT"]), M("1.6 CRDi 48V", 136, ["6iMT", "7DCT"], "diesel"), P("2.0 T-GDi N", 280, ["6MT", "8DCT"])],
      [2024, 2026, "PD restyling II / N Line", P("1.0 T-GDi", 100, ["6MT", "7DCT"]), P("1.5 DPI", 96, ["6MT"]), P("1.5 T-GDi", 140, ["7DCT"]), M("1.0 T-GDi 48V", 100, ["6iMT", "7DCT"]), M("1.5 T-GDi 48V", 140, ["7DCT"])]]],
    ["Hyundai", "Tucson", [
      [2004, 2009, "JM", P("2.0 MPI", 141, ["5MT", "4AT"]), P("2.7 V6", 175, ["4AT"]), D("2.0 CRDi", 140, ["6MT", "4AT"])],
      [2010, 2015, "ix35 / LM", P("1.6 GDi", 135, ["6MT"]), P("2.0 MPI", 163, ["6MT", "6AT"]), D("1.7 CRDi", 115, ["6MT"]), D("2.0 CRDi", 136, ["6MT", "6AT"])],
      [2016, 2020, "TL", P("1.6 GDi", 132, ["6MT"]), P("1.6 T-GDi", 177, ["6MT", "7DCT"]), D("1.6 CRDi", 116, ["6MT", "7DCT"]), D("2.0 CRDi", 136, ["6MT", "8AT"]), M("2.0 CRDi 48V", 185, ["8AT"], "diesel")],
      [2021, 2026, "NX4", P("1.6 T-GDi", 150, ["6MT", "7DCT"]), M("1.6 T-GDi 48V", 150, ["6iMT", "7DCT"]), D("1.6 CRDi", 115, ["6MT"]), M("1.6 CRDi 48V", 136, ["7DCT"], "diesel"), H("1.6 T-GDi HEV", 230, ["6AT"]), PH("1.6 T-GDi PHEV", 265, ["6AT"])]]],

    ["Ford", "Fiesta", [
      [2000, 2008, "Mk5/Mk6", P("1.25 Duratec", 75, ["5MT"]), P("1.6 Duratec", 100, ["5MT", "4AT"]), D("1.4 TDCi", 68, ["5MT"]), D("1.6 TDCi", 90, ["5MT"])],
      [2009, 2012, "Mk7", P("1.25 Duratec", 82, ["5MT"]), P("1.6 Ti-VCT", 120, ["5MT"]), D("1.4 TDCi", 70, ["5MT"]), D("1.6 TDCi", 95, ["5MT"])],
      [2013, 2017, "Mk7 restyling", P("1.0 EcoBoost", 100, ["5MT", "6AT"]), P("1.0 EcoBoost", 125, ["5MT"]), P("1.6 EcoBoost ST", 182, ["6MT"]), D("1.5 TDCi", 95, ["5MT"])],
      [2018, 2020, "Mk8", P("1.1 Ti-VCT", 85, ["5MT"]), P("1.0 EcoBoost", 100, ["6MT", "6AT"]), P("1.0 EcoBoost", 125, ["6MT"]), P("1.5 EcoBoost ST", 200, ["6MT"]), D("1.5 TDCi", 120, ["6MT"])],
      [2021, 2023, "Mk8 restyling", P("1.0 EcoBoost", 100, ["6MT", "7DCT"]), M("1.0 EcoBoost mHEV", 125, ["6MT", "7DCT"]), M("1.0 EcoBoost mHEV", 155, ["6MT"]), P("1.5 EcoBoost ST", 200, ["6MT"])]]],
    ["Ford", "Focus", [
      [2000, 2004, "Mk1", P("1.6 Zetec", 100, ["5MT", "4AT"]), P("2.0 ST170", 173, ["6MT"]), D("1.8 TDDi", 90, ["5MT"]), D("1.8 TDCi", 115, ["5MT"])],
      [2005, 2010, "Mk2", P("1.6 Ti-VCT", 115, ["5MT"]), P("2.5 Turbo ST", 225, ["6MT"]), D("1.6 TDCi", 109, ["5MT"]), D("2.0 TDCi", 136, ["6MT", "6Powershift"])],
      [2011, 2017, "Mk3", P("1.0 EcoBoost", 125, ["6MT"]), P("1.5 EcoBoost", 150, ["6MT", "6AT"]), D("1.5 TDCi", 120, ["6MT", "6Powershift"]), D("2.0 TDCi", 150, ["6MT", "6Powershift"]), P("2.0 EcoBoost ST", 250, ["6MT"])],
      [2018, 2021, "Mk4", P("1.0 EcoBoost", 125, ["6MT", "8AT"]), P("1.5 EcoBoost", 150, ["6MT", "8AT"]), D("1.5 EcoBlue", 120, ["6MT", "8AT"]), D("2.0 EcoBlue", 150, ["8AT"]), P("2.3 EcoBoost ST", 280, ["6MT", "7AT"])],
      [2022, 2026, "Mk4 restyling", M("1.0 EcoBoost mHEV", 125, ["6MT", "7DCT"]), M("1.0 EcoBoost mHEV", 155, ["6MT", "7DCT"]), P("2.3 EcoBoost ST", 280, ["6MT", "7AT"])]]],
    ["Ford", "Mondeo", [
      [2000, 2007, "Mk3", P("1.8 Duratec", 125, ["5MT"]), P("2.5 V6", 170, ["5MT", "5AT"]), D("2.0 TDCi", 130, ["6MT", "5AT"]), D("2.2 TDCi", 155, ["6MT"])],
      [2008, 2014, "Mk4", P("1.6 EcoBoost", 160, ["6MT"]), P("2.0 EcoBoost", 203, ["6Powershift"]), D("1.6 TDCi", 115, ["6MT"]), D("2.0 TDCi", 140, ["6MT", "6Powershift"])],
      [2015, 2019, "Mk5", P("1.5 EcoBoost", 160, ["6MT", "6AT"]), P("2.0 EcoBoost", 240, ["6AT"]), D("1.5 TDCi", 120, ["6MT"]), D("2.0 TDCi", 150, ["6MT", "6Powershift"]), H("2.0 Hybrid", 187, ["eCVT"])],
      [2020, 2022, "Mk5 restyling", D("2.0 EcoBlue", 150, ["6MT", "8AT"]), D("2.0 EcoBlue", 190, ["8AT"]), H("2.0 Hybrid", 187, ["eCVT"])]]],
    ["Ford", "C-Max", [
      [2003, 2010, "C-Max I", P("1.6 Ti-VCT", 115, ["5MT"]), P("2.0 Duratec", 145, ["5MT", "4AT"]), D("1.6 TDCi", 109, ["5MT"]), D("2.0 TDCi", 136, ["6MT", "6Powershift"])],
      [2011, 2015, "C-Max II", P("1.0 EcoBoost", 125, ["6MT"]), P("1.6 EcoBoost", 150, ["6MT"]), D("1.6 TDCi", 115, ["6MT"]), D("2.0 TDCi", 140, ["6MT", "6Powershift"])],
      [2016, 2019, "C-Max II restyling", P("1.0 EcoBoost", 125, ["6MT"]), P("1.5 EcoBoost", 150, ["6MT", "6AT"]), D("1.5 TDCi", 120, ["6MT", "6Powershift"]), D("2.0 TDCi", 150, ["6MT", "6Powershift"])]]],
    ["Ford", "Kuga", [
      [2008, 2012, "Kuga I", P("2.5 Turbo", 200, ["6MT", "5AT"]), D("2.0 TDCi", 136, ["6MT"]), D("2.0 TDCi", 163, ["6MT", "6Powershift"])],
      [2013, 2016, "Kuga II", P("1.6 EcoBoost", 150, ["6MT"]), P("1.6 EcoBoost", 182, ["6AT"]), D("2.0 TDCi", 140, ["6MT", "6Powershift"]), D("2.0 TDCi", 163, ["6Powershift"])],
      [2017, 2019, "Kuga II restyling", P("1.5 EcoBoost", 150, ["6MT"]), P("1.5 EcoBoost", 182, ["6AT"]), D("1.5 TDCi", 120, ["6MT", "6Powershift"]), D("2.0 TDCi", 150, ["6MT", "6Powershift"])],
      [2020, 2023, "Kuga III", P("1.5 EcoBoost", 150, ["6MT"]), D("1.5 EcoBlue", 120, ["6MT", "8AT"]), H("2.5 Duratec FHEV", 190, ["eCVT"]), PH("2.5 Duratec PHEV", 225, ["eCVT"])],
      [2024, 2026, "Kuga III restyling", P("1.5 EcoBoost", 150, ["6MT"]), H("2.5 Duratec FHEV", 180, ["eCVT"]), H("2.5 Duratec FHEV AWD", 183, ["eCVT"]), PH("2.5 Duratec PHEV", 243, ["eCVT"])]]],

    ["Opel", "Corsa", [
      [2000, 2006, "Corsa C", P("1.2 16V", 75, ["5MT", "Easytronic"]), P("1.4 16V", 90, ["5MT", "4AT"]), D("1.3 CDTI", 70, ["5MT"]), D("1.7 CDTI", 100, ["5MT"])],
      [2007, 2014, "Corsa D", P("1.2", 85, ["5MT", "Easytronic"]), P("1.4", 100, ["5MT", "4AT"]), P("1.6 Turbo OPC", 192, ["6MT"]), D("1.3 CDTI", 95, ["5MT"]), D("1.7 CDTI", 130, ["6MT"])],
      [2015, 2019, "Corsa E", P("1.4", 90, ["5MT", "Easytronic"]), P("1.0 Turbo", 115, ["6MT"]), P("1.4 Turbo", 150, ["6MT"]), D("1.3 CDTI", 95, ["5MT"])],
      [2020, 2023, "Corsa F", P("1.2", 75, ["5MT"]), P("1.2 Turbo", 100, ["6MT", "8AT"]), P("1.2 Turbo", 130, ["8AT"]), D("1.5 Diesel", 102, ["6MT"]), E("Corsa-e 50 kWh", 136)],
      [2024, 2026, "Corsa F restyling", P("1.2", 75, ["5MT"]), P("1.2 Turbo", 100, ["6MT"]), M("1.2 Hybrid 48V", 100, ["6eDCT"]), M("1.2 Hybrid 48V", 136, ["6eDCT"]), E("Corsa Electric 50 kWh", 136), E("Corsa Electric 51 kWh", 156)]]],
    ["Opel", "Astra", [
      [2000, 2004, "Astra G", P("1.6 16V", 100, ["5MT", "4AT"]), P("2.0 Turbo OPC", 200, ["5MT"]), D("1.7 DTI", 75, ["5MT"]), D("2.0 DTI", 100, ["5MT"])],
      [2005, 2009, "Astra H", P("1.6", 115, ["5MT", "Easytronic"]), P("2.0 Turbo OPC", 240, ["6MT"]), D("1.3 CDTI", 90, ["6MT"]), D("1.9 CDTI", 150, ["6MT", "6AT"])],
      [2010, 2015, "Astra J", P("1.4 Turbo", 140, ["6MT", "6AT"]), P("1.6 Turbo", 180, ["6MT", "6AT"]), D("1.7 CDTI", 110, ["6MT"]), D("2.0 CDTI", 165, ["6MT", "6AT"])],
      [2016, 2021, "Astra K", P("1.0 Turbo", 105, ["5MT", "Easytronic"]), P("1.4 Turbo", 150, ["6MT", "6AT"]), P("1.2 Turbo", 130, ["6MT"]), D("1.6 CDTI", 110, ["6MT"]), D("1.5 Diesel", 122, ["6MT", "9AT"])],
      [2022, 2026, "Astra L", P("1.2 Turbo", 110, ["6MT"]), P("1.2 Turbo", 130, ["6MT", "8AT"]), D("1.5 Diesel", 130, ["8AT"]), PH("1.6 Plug-in Hybrid", 180, ["8AT"]), PH("1.6 GSe Plug-in Hybrid", 225, ["8AT"]), E("Astra Electric 54 kWh", 156)]]],
    ["Opel", "Zafira", [
      [2000, 2005, "Zafira A", P("1.6 16V", 100, ["5MT"]), P("2.0 Turbo OPC", 192, ["5MT"]), D("2.0 DTI", 100, ["5MT"]), D("2.2 DTI", 125, ["5MT"])],
      [2006, 2011, "Zafira B", P("1.6", 115, ["5MT"]), P("1.8", 140, ["5MT", "Easytronic"]), P("2.0 Turbo OPC", 240, ["6MT"]), D("1.9 CDTI", 120, ["6MT"]), D("1.9 CDTI", 150, ["6MT", "6AT"])],
      [2012, 2016, "Zafira Tourer", P("1.4 Turbo", 140, ["6MT", "6AT"]), P("1.6 SIDI Turbo", 170, ["6MT", "6AT"]), D("1.6 CDTI", 136, ["6MT"]), D("2.0 CDTI", 165, ["6MT", "6AT"])],
      [2017, 2019, "Zafira Tourer restyling", P("1.4 Turbo", 140, ["6MT", "6AT"]), P("1.6 Turbo", 200, ["6MT"]), D("1.6 CDTI", 134, ["6MT"]), D("2.0 CDTI", 170, ["6MT", "6AT"])],
      [2020, 2026, "Zafira Life", D("1.5 Diesel", 120, ["6MT"]), D("2.0 Diesel", 145, ["6MT", "8AT"]), D("2.0 Diesel", 177, ["8AT"]), E("Zafira-e Life 50 kWh", 136), E("Zafira-e Life 75 kWh", 136)]]],
    ["Opel", "Insignia", [
      [2008, 2013, "Insignia A", P("1.4 Turbo", 140, ["6MT"]), P("2.0 Turbo", 220, ["6MT", "6AT"]), P("2.8 V6 Turbo OPC", 325, ["6MT", "6AT"]), D("2.0 CDTI", 130, ["6MT", "6AT"]), D("2.0 CDTI", 160, ["6MT", "6AT"])],
      [2014, 2017, "Insignia A restyling", P("1.4 Turbo", 140, ["6MT"]), P("1.6 SIDI Turbo", 170, ["6MT", "6AT"]), D("1.6 CDTI", 136, ["6MT"]), D("2.0 CDTI", 170, ["6MT", "6AT"])],
      [2018, 2020, "Insignia B", P("1.5 Turbo", 165, ["6MT", "6AT"]), P("2.0 Turbo", 260, ["8AT"]), D("1.6 Diesel", 136, ["6MT", "6AT"]), D("2.0 Diesel", 170, ["8AT"])],
      [2021, 2022, "Insignia B restyling", P("2.0 Turbo", 200, ["9AT"]), D("1.5 Diesel", 122, ["6MT", "8AT"]), D("2.0 Diesel", 174, ["8AT"])]]]
  ];

  const unique = values => [...new Set(values)];
  const automaticBox = box => !/^\d+i?MT$/i.test(box);
  const gearboxTech = box => {
    if (/DSG|DCT|EDC|Powershift|eDCT/i.test(box)) return ["dct"];
    if (/CVT|Multi-mode/i.test(box)) return ["cvt"];
    if (/AT|Easytronic/i.test(box)) return ["automaticGearbox"];
    return [];
  };
  const engineTech = (spec, from) => {
    if (spec.fuel === "electric") return spec.extra;
    const base = spec.baseFuel || spec.fuel;
    const tech = base === "diesel" ? ["egr"] : ["lambda", "catalyst"];
    if (base === "diesel" && /dCi|TDCi|CRDi|CDTI|EcoBlue|Blue dCi|Diesel/i.test(spec.engine)) tech.push("commonRail");
    if (base === "diesel" && !/SDI/i.test(spec.engine)) tech.push("turbo");
    if (base === "diesel" && (from >= 2011 || /Blue|EcoBlue/i.test(spec.engine))) tech.push("dpf");
    if (base === "diesel" && from >= 2015 && /Blue|EcoBlue|TDI|CDTI|CRDi|dCi|Diesel/i.test(spec.engine)) tech.push("scr", "adblue");
    if (/TSI|TFSI|TCe|T-GDi|T-GDI|Turbo|EcoBoost|SIDI/i.test(spec.engine)) tech.push("directInjection", "turbo");
    if (/MPI|DPI|SCe|Duratec|Ti-VCT|Zetec|16V|FSI|GDi/i.test(spec.engine) && !/Turbo|T-GDi|TSI|TCe|EcoBoost|SIDI/i.test(spec.engine)) tech.push("portInjection");
    if (base === "gasoline" && from >= 2018 && /TSI|TFSI|TCe|T-GDi|EcoBoost|Turbo/i.test(spec.engine)) tech.push("gpf");
    if (spec.fuel === "mhev") tech.push("mhsg");
    if (["hybrid", "phev"].includes(spec.fuel)) tech.push("tractionBattery");
    if (from >= 2011) tech.push("startStop");
    return unique([...tech, ...spec.extra]);
  };

  const variants = [];
  CATALOG.forEach(([brand, model, eras]) => eras.forEach(([from, to, generation, ...engines]) => {
    engines.forEach(spec => spec.boxes.forEach(box => {
      const id = `${brand}-${model}-${from}-${spec.engine}-${spec.power}-${box}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      variants.push({
        id, brand, model, years: [from, to], generation,
        engine: `${spec.engine} ${spec.power} CV`, power: spec.power,
        fuel: spec.fuel, baseFuel: spec.baseFuel || null,
        transmission: automaticBox(box) ? "automatic" : "manual",
        gearbox: box, turbo: /turbo|tsi|tfsi|tce|t-gdi|ecoboost|tdi|dci|crdi|cdti|diesel|ecoblue/i.test(spec.engine) ? "yes" : "no",
        tech: unique([...engineTech(spec, from), ...gearboxTech(box)]), catalogued: true
      });
    }));
  }));

  globalThis.VEHICLE_VARIANTS = variants;
})();
