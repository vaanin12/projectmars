const firms = [
	{
        "id": 1,
        "name": "Martian Firma",
        "budget": 100000000,
        "budget_spent": 450000,
        "date_of_first_purchase": "2020-03-01"
    },
    {
        "id": 2,
        "name": "Solar Firma",
        "budget": 100000000,
        "budget_spent": 550000,
        "date_of_first_purchase": "2020-02-01"
    },
    {
        "id": 3,
        "name": "Lunar Firma",
        "budget": 100000000,
        "budget_spent": 650000,
        "date_of_first_purchase": "2020-03-02"
    },
    {
        "id": 4,
        "name": "Galaxy Firma",
        "budget": 100000000,
        "budget_spent": 750000,
        "date_of_first_purchase": "2020-04-03"
    },
    {
        "id": 5,
        "name": "Earth Internation Firma",
        "budget": 100000000,
        "budget_spent": 850000,
        "date_of_first_purchase": "2020-03-07"
    }
];

const modalItem = {
        "id": 54545554,
        "name": "Sample Modal Item",
        "budget": 103320000000,
        "budget_spent": 850232000,
        "date_of_first_purchase": "2099-03-07"
}

export function getFirms() {
  return {firms: firms, modalItem: modalItem };
}

