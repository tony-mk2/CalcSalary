function calc() {
    let L = document.getElementById("l").value;
    let V = document.getElementById("v").value;
    let l_val, g_val, p_min, p_max = null;

    l_lst.forEach(lst => {
        if (lst[0] == L) {
            l_val = lst[1];
        }
    });

    if (l_val == null || V == "" || isNaN(V)) { return; }

    let v_val = (V - Math.floor(V % 100) + Math.floor(V % 100 / 50) * 50) / 10;
    let point = l_val + v_val;

    g_lst.forEach(lst => {
        if (lst[1] <= point && point <= lst[2]) {
            g_val = lst[0];
            p_min = lst[1];
            p_max = lst[2];
        }
    });

    if (g_val == null || g_lst > s_lst.length) { return; }

    let salary = s_lst[g_val - 1];

    document.getElementById("p").innerText = `${point} (${p_min}～${p_max})`;
    document.getElementById("g").innerText = g_val;
    document.getElementById("s").innerText = salary.toLocaleString();
}

let s_lst = [
    200000,
    204000,
    209000,
    214000,
    219000,
    232000,
    242000,
    252000,
    262000,
    272000,
    285000,
    300000,
    325000,
    355000,
    385000,
    415000,
    445000,
    475000,
    505000,
    535000,
    575000,
    625000,
    675000,
    725000,
    775000,
];

let l_lst = [
    ["1-1", 133],
    ["1-2", 138],
    ["1-3", 146],
    ["2-1", 179],
    ["2-2", 196],
    ["2-3", 207],
    ["3-1", 234],
    ["3-2", 249],
    ["3-3", 264],
    ["4-1", 283],
    ["4-2", 300],
    ["4-3", 315],
    ["5-1", 335],
    ["5-2", 352],
    ["5-3", 367],
];

let g_lst = [
    [1, 0, 489],
    [2, 490, 499],
    [3, 500, 509],
    [4, 510, 519],
    [5, 520, 528],
    [6, 529, 564],
    [7, 565, 585],
    [8, 586, 599],
    [9, 600, 621],
    [10, 622, 657],
    [11, 658, 678],
    [12, 679, 728],
    [13, 729, 778],
    [14, 779, 842],
    [15, 843, 899],
    [16, 900, 949],
    [17, 950, 1014],
    [18, 1015, 1071],
    [19, 1072, 1121],
    [20, 1122, 1333],
    [21, 1334, 1374],
    [22, 1375, 1425],
    [23, 1426, 1477],
    [24, 1478, 1528],
    [25, 1529, 9999],
];