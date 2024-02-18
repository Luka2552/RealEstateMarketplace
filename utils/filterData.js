export const filterData = [
  {
    items: [
      { name: "Buy", value: "For-Sale" },
      { name: "Rent", value: "For-Rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    items: [
      { name: "Daily", value: "daily" },
      { name: "Weekly", value: "weekly" },
      { name: "Monthly", value: "monthly" },
      { name: "Yearly", value: "yearly" },
    ],
    placeholder: "Rent Frequency",
    queryName: "rentFrequency",
  },
  {
    items: [
      { name: "2,500", value: "2500" },
      { name: "5,000", value: "5000" },
      { name: "7,500", value: "7500" },
      { name: "10,000", value: "10000" },
      { name: "12,500", value: "12500" },
      { name: "15,000", value: "15000" },
      { name: "20,000", value: "20000" },
    ],
    placeholder: "Min Price(USD)",
    queryName: "minPrice",
  },
  {
    items: [
      { name: "12,500", value: "12500" },
      { name: "15,000", value: "15000" },
      { name: "20,000", value: "20000" },
      { name: "27,500", value: "27500" },
      { name: "33,750", value: "33750" },
      { name: "40,000", value: "40000" },
      { name: "46,250", value: "46250" },
      { name: "50,000", value: "50000" },
      { name: "75,000", value: "75000" },
      { name: "100,000", value: "100000" },
      { name: "125,000", value: "125000" },
      { name: "150,000", value: "150000" },
      { name: "175,000", value: "175000" },
      { name: "200,000", value: "200000" },
      { name: "225,000", value: "225000" },
      { name: "250,000", value: "250000" },
    ],
    placeholder: "Max Price(USD)",
    queryName: "maxPrice",
  },
  {
    items: [
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-des" },
      { name: "Newest", value: "date-asc" },
      { name: "Oldest", value: "date-desc" },
      { name: "Verified", value: "verified-score" },
      { name: "City Level Score", value: "city-level-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },
  {
    items: [
      { name: "100", value: "100" },
      { name: "200", value: "200" },
      { name: "300", value: "300" },
      { name: "400", value: "400" },
      { name: "500", value: "500" },
      { name: "1000", value: "1000" },
      { name: "2000", value: "2000" },
    ],
    placeholder: "Max Area(m2)",
    queryName: "areaMax",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Rooms",
    queryName: "roomsMin",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Baths",
    queryName: "bathsMin",
  },
  {
    items: [
      { name: "Furnished", value: "furnished" },
      { name: "Unfurnished", value: "unfurnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
  },
  {
    items: [
      { name: "Apartment", value: "4" },
      { name: "Townhouses", value: "16" },
      { name: "Villas", value: "3" },
      { name: "Penthouses", value: "18" },
      { name: "Hotel Apartments", value: "21" },
      { name: "Villa Compound", value: "19" },
      { name: "Residential Plot", value: "14" },
      { name: "Residential Floor", value: "12" },
      { name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "categoryExternalID",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: "purpose",
      value: purpose,
    },
    {
      name: "rentFrequency",
      value: rentFrequency,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },
    {
      name: "areaMax",
      value: areaMax,
    },
    {
      name: "roomsMin",
      value: roomsMin,
    },
    {
      name: "bathsMin",
      value: bathsMin,
    },
    {
      name: "sort",
      value: sort,
    },
    {
      name: "locationExternalIDs",
      value: locationExternalIDs,
    },
    {
      name: "categoryExternalID",
      value: categoryExternalID,
    },
  ];

  return values;
};
