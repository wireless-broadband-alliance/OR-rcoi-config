function uncheck_baseline_id() {
    let inputs = document.getElementById('checkIdBaseline');
    inputs.checked = false;
    let current = document.getElementById('checkIdEnhanced');
    if (current.checked == false) {
        current.checked = true;
    }
}

function uncheck_enhanced_id() {
    let inputs = document.getElementById('checkIdEnhanced');
    inputs.checked = false;
    let current = document.getElementById('checkIdBaseline');
    if (current.checked == false) {
        current.checked = true;
    }
}

function uncheck_free_anonymous() {
    let inputs = document.getElementById('freeAnonymous');
    inputs.checked = false;
    let current = document.getElementById('freeIdentified');
    if (current.checked == false) {
        current.checked = true;
    }
}

function uncheck_free_identified() {
    let inputs = document.getElementById('freeIdentified');
    inputs.checked = false;
    let current = document.getElementById('freeAnonymous');
    if (current.checked == false) {
        current.checked = true;
    }
}

function uncheck_paid_anonymous() {
    let inputs = document.getElementById('paidAnonymous');
    inputs.checked = false;
    let current = document.getElementById('paidIdentified');
    if (current.checked == false) {
        current.checked = true;
    }
}
function uncheck_paid_identified() {
    let inputs = document.getElementById('paidIdentified');
    inputs.checked = false;
    let current = document.getElementById('paidAnonymous');
    if (current.checked == false) {
        current.checked = true;
    }
}

function free_qos() {
    let b = document.getElementById('free_bronze');
    let s = document.getElementById('free_silver');
    if (b.checked == false && s.checked == false) {
        b.checked = true;
    }
}

function paid_qos() {
    let b = document.getElementById('paid_bronze');
    let s = document.getElementById('paid_silver');
    if (b.checked == false && s.checked == false) {
        b.checked = true;
    }
}

function lCase() {
    let u = document.getElementById('upperCase');
    let l = document.getElementById('lowerCase');
    l.checked = true;
    u.checked = false;
}

function uCase() {
    let u = document.getElementById('upperCase');
    let l = document.getElementById('lowerCase');
    u.checked = true;
    l.checked = false;

}

function free_all() {
    let id1 = document.getElementById('free_all');
    let id2 = document.getElementById('free_sp');
    let id3 = document.getElementById('free_cp');
    let id4 = document.getElementById('free_ent');
    let id5 = document.getElementById('free_gov');
    let id6 = document.getElementById('free_auto');
    let id7 = document.getElementById('free_hosp');
    let id8 = document.getElementById('free_air');
    let id9 = document.getElementById('free_edu');
    let id10 = document.getElementById('free_cable');
    let id11 = document.getElementById('free_manu');
    let id12 = document.getElementById('free_shop');


    if (id1.checked == true) {
        id2.checked = false;
        id3.checked = false;
        id4.checked = false;
        id5.checked = false;
        id6.checked = false;
        id7.checked = false;
        id8.checked = false;
        id9.checked = false;
        id10.checked = false;
        id11.checked = false;
        id12.checked = false;
    }
    else {
        id1.checked = true;
    }
}

function paid_all() {
    let id1 = document.getElementById('paid_all');
    let id2 = document.getElementById('paid_sp');
    let id3 = document.getElementById('paid_cp');
    let id4 = document.getElementById('paid_ent');
    let id5 = document.getElementById('paid_gov');
    let id6 = document.getElementById('paid_auto');
    let id7 = document.getElementById('paid_hosp');
    let id8 = document.getElementById('paid_air');
    let id9 = document.getElementById('paid_edu');
    let id10 = document.getElementById('paid_cable');
    let id11 = document.getElementById('paid_manu');
    let id12 = document.getElementById('paid_shop');


    if (id1.checked == true) {
        id2.checked = false;
        id3.checked = false;
        id4.checked = false;
        id5.checked = false;
        id6.checked = false;
        id7.checked = false;
        id8.checked = false;
        id9.checked = false;
        id10.checked = false;
        id11.checked = false;
        id12.checked = false;
    }
    else {
        id1.checked = true;
    }
}

function free_id() {
    let id1 = document.getElementById('free_all');
    let id2 = document.getElementById('free_sp');
    let id3 = document.getElementById('free_cp');
    let id4 = document.getElementById('free_ent');
    let id5 = document.getElementById('free_gov');
    let id6 = document.getElementById('free_auto');
    let id7 = document.getElementById('free_hosp');
    let id8 = document.getElementById('free_air');
    let id9 = document.getElementById('free_edu');
    let id10 = document.getElementById('free_cable');
    let id11 = document.getElementById('free_manu');
    let id12 = document.getElementById('free_shop');


    if (id2.checked == true || id3.checked == true || id4.checked == true || id5.checked == true || id6.checked == true || id7.checked == true || id8.checked == true || id9.checked == true || id10.checked == true || id11.checked == true || id12.checked == true) {
        id1.checked = false;
    }
    else {
        id1.checked = true;
    }
}

function paid_id() {
    let id1 = document.getElementById('paid_all');
    let id2 = document.getElementById('paid_sp');
    let id3 = document.getElementById('paid_cp');
    let id4 = document.getElementById('paid_ent');
    let id5 = document.getElementById('paid_gov');
    let id6 = document.getElementById('paid_auto');
    let id7 = document.getElementById('paid_hosp');
    let id8 = document.getElementById('paid_air');
    let id9 = document.getElementById('paid_edu');
    let id10 = document.getElementById('paid_cable');
    let id11 = document.getElementById('paid_manu');
    let id12 = document.getElementById('paid_shop');


    if (id2.checked == true || id3.checked == true || id4.checked == true || id5.checked == true || id6.checked == true || id7.checked == true || id8.checked == true || id9.checked == true || id10.checked == true || id11.checked == true || id12.checked == true) {
        id1.checked = false;
    }
    else {
        id1.checked = true;
    }
}


function paid() {
    let current = document.getElementById('paid');
    if (current.checked == true) {
        let id1 = document.getElementById('paid_all');
        id1.disabled = false;
        let id2 = document.getElementById('paid_sp');
        id2.disabled = false;
        let id3 = document.getElementById('paid_cp');
        id3.disabled = false;
        let id4 = document.getElementById('paid_ent');
        id4.disabled = false;
        let id5 = document.getElementById('paid_gov');
        id5.disabled = false;
        let id6 = document.getElementById('paid_auto');
        id6.disabled = false;
        let id7 = document.getElementById('paid_hosp');
        id7.disabled = false;
        let id8 = document.getElementById('paid_air');
        id8.disabled = false;
        let id9 = document.getElementById('paid_edu');
        id9.disabled = false;
        let id10 = document.getElementById('paid_cable');
        id10.disabled = false;
        let id11 = document.getElementById('paid_manu');
        id11.disabled = false;
        let id12 = document.getElementById('paid_shop');
        id12.disabled = false;

        let id13 = document.getElementById('paid_bronze');
        id13.disabled = false;
        let id14 = document.getElementById('paid_silver');
        id14.disabled = false;
        let id15 = document.getElementById('paidAnonymous');
        id15.disabled = false;
        let id16 = document.getElementById('paidIdentified');
        id16.disabled = false;


    }
    else {
        let id1 = document.getElementById('paid_all');
        id1.disabled = true;
        let id2 = document.getElementById('paid_sp');
        id2.disabled = true;
        let id3 = document.getElementById('paid_cp');
        id3.disabled = true;
        let id4 = document.getElementById('paid_ent');
        id4.disabled = true;
        let id5 = document.getElementById('paid_gov');
        id5.disabled = true;
        let id6 = document.getElementById('paid_auto');
        id6.disabled = true;
        let id7 = document.getElementById('paid_hosp');
        id7.disabled = true;
        let id8 = document.getElementById('paid_air');
        id8.disabled = true;
        let id9 = document.getElementById('paid_edu');
        id9.disabled = true;
        let id10 = document.getElementById('paid_cable');
        id10.disabled = true;
        let id11 = document.getElementById('paid_manu');
        id11.disabled = true;
        let id12 = document.getElementById('paid_shop');
        id12.disabled = true;

        let id13 = document.getElementById('paid_bronze');
        id13.disabled = true;
        let id14 = document.getElementById('paid_silver');
        id14.disabled = true;
        let id15 = document.getElementById('paidAnonymous');
        id15.disabled = true;
        let id16 = document.getElementById('paidIdentified');
        id16.disabled = true;
    }
}


function orfree() {
    let current = document.getElementById('free');
    if (current.checked == true) {
        let id1 = document.getElementById('free_all');
        id1.disabled = false;
        let id2 = document.getElementById('free_sp');
        id2.disabled = false;
        let id3 = document.getElementById('free_cp');
        id3.disabled = false;
        let id4 = document.getElementById('free_ent');
        id4.disabled = false;
        let id5 = document.getElementById('free_gov');
        id5.disabled = false;
        let id6 = document.getElementById('free_auto');
        id6.disabled = false;
        let id7 = document.getElementById('free_hosp');
        id7.disabled = false;
        let id8 = document.getElementById('free_air');
        id8.disabled = false;
        let id9 = document.getElementById('free_edu');
        id9.disabled = false;
        let id10 = document.getElementById('free_cable');
        id10.disabled = false;
        let id11 = document.getElementById('free_manu');
        id11.disabled = false;
        let id12 = document.getElementById('free_shop');
        id12.disabled = false;

        let id13 = document.getElementById('free_bronze');
        id13.disabled = false;
        let id14 = document.getElementById('free_silver');
        id14.disabled = false;
        let id15 = document.getElementById('freeAnonymous');
        id15.disabled = false;
        let id16 = document.getElementById('freeIdentified');
        id16.disabled = false;


    }
    else {
        let id1 = document.getElementById('free_all');
        id1.disabled = true;
        let id2 = document.getElementById('free_sp');
        id2.disabled = true;
        let id3 = document.getElementById('free_cp');
        id3.disabled = true;
        let id4 = document.getElementById('free_ent');
        id4.disabled = true;
        let id5 = document.getElementById('free_gov');
        id5.disabled = true;
        let id6 = document.getElementById('free_auto');
        id6.disabled = true;
        let id7 = document.getElementById('free_hosp');
        id7.disabled = true;
        let id8 = document.getElementById('free_air');
        id8.disabled = true;
        let id9 = document.getElementById('free_edu');
        id9.disabled = true;
        let id10 = document.getElementById('free_cable');
        id10.disabled = true;
        let id11 = document.getElementById('free_manu');
        id11.disabled = true;
        let id12 = document.getElementById('free_shop');
        id12.disabled = true;

        let id13 = document.getElementById('free_bronze');
        id13.disabled = true;
        let id14 = document.getElementById('free_silver');
        id14.disabled = true;
        let id15 = document.getElementById('freeAnonymous');
        id15.disabled = true;
        let id16 = document.getElementById('freeIdentified');
        id16.disabled = true;
    }
}

function calc_rcois() {
    let rcoi_array = "";
    let nibbleF1 = 0;
    let nibbleP1 = 0;
    let nibbleF2 = 0;
    let nibbleP2 = 0;
    let proofing = document.getElementById('checkIdBaseline');
    let baseRcoi = "5A03BA"
    if (proofing.checked == true) {

    }
    else {
        nibbleF1 = 8;
        nibbleP1 = 8;

    }
    let free = document.getElementById('free');
    if (free.checked == true) {
        let pid = document.getElementById('freeAnonymous');
        if (pid.checked == true) {
            nibbleF1 += 0;
        }
        else {
            nibbleF1 += 1;
        }

        let bronze = document.getElementById('free_bronze');
        if (bronze.checked == true) {
            nibbleF1 += 0;
            let id1 = document.getElementById('free_all');
            let id2 = document.getElementById('free_sp');
            let id3 = document.getElementById('free_cp');
            let id4 = document.getElementById('free_ent');
            let id5 = document.getElementById('free_gov');
            let id6 = document.getElementById('free_auto');
            let id7 = document.getElementById('free_hosp');
            let id8 = document.getElementById('free_air');
            let id9 = document.getElementById('free_edu');
            let id10 = document.getElementById('free_cable');
            let id11 = document.getElementById('free_manu');
            let id12 = document.getElementById('free_shop');

            if (id1.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "000" + "<br>";
            }
            if (id2.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "100" + "<br>";
            }
            if (id3.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "200" + "<br>";
            }
            if (id4.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "300" + "<br>";
            }
            if (id5.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "400" + "<br>";
            }
            if (id6.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "500" + "<br>";
            }
            if (id7.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "600" + "<br>";
            }
            if (id8.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "700" + "<br>";
            }
            if (id9.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "800" + "<br>";
            }
            if (id10.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "900" + "<br>";
            }
            if (id11.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "A00" + "<br>";
            }
            if (id12.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "B00" + "<br>";
            }

        }
        let silver = document.getElementById('free_silver');
        if (silver.checked == true) {
            nibbleF1 += 2;

            let id21 = document.getElementById('free_all');
            let id22 = document.getElementById('free_sp');
            let id23 = document.getElementById('free_cp');
            let id24 = document.getElementById('free_ent');
            let id25 = document.getElementById('free_gov');
            let id26 = document.getElementById('free_auto');
            let id27 = document.getElementById('free_hosp');
            let id28 = document.getElementById('free_air');
            let id29 = document.getElementById('free_edu');
            let id30 = document.getElementById('free_cable');
            let id31 = document.getElementById('free_manu');
            let id32 = document.getElementById('free_shop');

            if (id21.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "000" + "<br>";
            }
            if (id22.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "100" + "<br>";
            }
            if (id23.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "200" + "<br>";
            }
            if (id24.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "300" + "<br>";
            }
            if (id25.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "400" + "<br>";
            }
            if (id26.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "500" + "<br>";
            }
            if (id27.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "600" + "<br>";
            }
            if (id28.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "700" + "<br>";
            }
            if (id29.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "800" + "<br>";
            }
            if (id30.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "900" + "<br>";
            }
            if (id31.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "A00" + "<br>";
            }
            if (id32.checked == true) {
                rcoi_array += baseRcoi + nibbleF1.toString(16).toUpperCase() + "B00" + "<br>";
            }
        }
    }

    let paid = document.getElementById('paid');
    if (paid.checked == true) {
        let pid = document.getElementById('paidAnonymous');
        if (pid.checked == true) {
            nibbleP1 += 0;
        }
        else {
            nibbleP1 += 1;
        }
        baseRcoi = "BAA2D0"

        let bronze = document.getElementById('paid_bronze');
        if (bronze.checked == true) {
            nibbleP1 += 0;
            let id41 = document.getElementById('paid_all');
            let id42 = document.getElementById('paid_sp');
            let id43 = document.getElementById('paid_cp');
            let id44 = document.getElementById('paid_ent');
            let id45 = document.getElementById('paid_gov');
            let id46 = document.getElementById('paid_auto');
            let id47 = document.getElementById('paid_hosp');
            let id48 = document.getElementById('paid_air');
            let id49 = document.getElementById('paid_edu');
            let id50 = document.getElementById('paid_cable');
            let id51 = document.getElementById('paid_manu');
            let id52 = document.getElementById('paid_shop');

            if (id41.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "000" + "<br>";
            }
            if (id42.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "100" + "<br>";
            }
            if (id43.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "200" + "<br>";
            }
            if (id44.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "300" + "<br>";
            }
            if (id45.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "400" + "<br>";
            }
            if (id46.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "500" + "<br>";
            }
            if (id47.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "600" + "<br>";
            }
            if (id48.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "700" + "<br>";
            }
            if (id49.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "800" + "<br>";
            }
            if (id50.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "900" + "<br>";
            }
            if (id51.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "A00" + "<br>";
            }
            if (id52.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "B00" + "<br>";
            }

        }
        let silver = document.getElementById('paid_silver');
        if (silver.checked == true) {
            nibbleP1 += 2;


            let id61 = document.getElementById('paid_all');
            let id62 = document.getElementById('paid_sp');
            let id63 = document.getElementById('paid_cp');
            let id64 = document.getElementById('paid_ent');
            let id65 = document.getElementById('paid_gov');
            let id66 = document.getElementById('paid_auto');
            let id67 = document.getElementById('paid_hosp');
            let id68 = document.getElementById('paid_air');
            let id69 = document.getElementById('paid_edu');
            let id70 = document.getElementById('paid_cable');
            let id71 = document.getElementById('paid_manu');
            let id72 = document.getElementById('paid_shop');

            if (id61.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "000" + "<br>";
            }
            if (id62.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "100" + "<br>";
            }
            if (id63.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "200" + "<br>";
            }
            if (id64.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "300" + "<br>";
            }
            if (id65.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "400" + "<br>";
            }
            if (id66.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "500" + "<br>";
            }
            if (id67.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "600" + "<br>";
            }
            if (id68.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "700" + "<br>";
            }
            if (id69.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "800" + "<br>";
            }
            if (id70.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "900" + "<br>";
            }
            if (id71.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "A00" + "<br>";
            }
            if (id72.checked == true) {
                rcoi_array += baseRcoi + nibbleP1.toString(16).toUpperCase() + "B00" + "<br>";
            }
        }
    }

    let caseType = document.getElementById('lowerCase');
    if (caseType.checked == true) {
        rcoi_array = rcoi_array.toLowerCase();
    }


    document.getElementById("results").innerHTML = rcoi_array;
}
