$("#container").mapael({
    map : {
        name : "world_countries",
        defaultArea: {
            attrs: {
                stroke: "#000",
                "stroke-width": 1,
                fill: "#FFFFFF"
            },
            attrsHover: {
                "stroke-width": 2,
                fill: "#F5A29F"
            }
        }
    },
    legend: {
        area: {
            title: "COVID Information",
            slices: [
                {
                    max: 100000,
                    attrs: {
                        fill: "#F5A29F"
                    },
                    label: "Less than 100,000"
                },
                {
                    min: 100000,
                    max: 500000,
                    attrs: {
                        fill: "#FF514D"
                    },
                    label: "Between 100,000 and 500,000"
                },
                {
                    min: 500000,
                    max: 1000000,
                    attrs: {
                        fill: "#800300"
                    },
                    label: "Between 500,000 and 1,000,000"
                },
                {
                    min: 1000000,
                    attrs: {
                        fill: "#000000"
                    },
                    label: "Over 1,000,000"
                }
            ]
        }
    },
    areas: {
        "NZ": {
            value: 421234,
            href: "#",
        },
        "PH": {
            value: 542910,
            href: "#",
        },
        "CN": {
            value: 100000000,
            href: "#"
        },
        "US": {
            value: 900,
            href: "#"
        },
        "BR": {
            value: "555555",
            href: "#"
        }
    }
});