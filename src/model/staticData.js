export const mockData = {
    "dashboard": {
        "pendingPayment": {
            "label": "Payment - Pending Approval",
            "code": "ppa",
            "details": [
                {
                    "label": "Q0022706",
                    "message": "Cut - Off time 2 hrs from now",
                    "subLabel": "KRW 701"
                }
            ]
        },
        "prioMessage": {
            "label": "Priority Messages",
            "details": [
                {
                    "label": "Bill Payments Report - Korea Bill",
                    "message": "All Messages",
                    "subLabel": ""
                }
            ],
            "code": "message"
        },
        "navigation": {
            "label": "Quick Navigation",
            "code":"navigation",
            "details": [
                {
                    "label": "Create Payments",
                    "code": "CR_PM",
                    "subLabel": "Make a new domestic or international payment"
                },
                {
                    "label": "Create Payee",
                    "code": "CR_PAYEE",
                    "subLabel": "Create a new beneficiary with details to receive payment"
                },
                {
                    "label": "View Account Balance",
                    "code": "VIEW_BAL",
                    "subLabel": "View balance and details of your account"
                },
                {
                    "label": "Manage Reports",
                    "code": "MANAGE_REPORTS",
                    "subLabel": "View, schedule and run reports"
                }
            ]
        },
        "pendingTask": {
            "code": "pendingTask",
            "label": "Pending Tasks",
            "value": "1555",
            "details": [
                {
                    "type": "cash",
                    "label": "Cash",
                    "lastUpdated": "17/07/2024 04:09:44 PM",
                    "details": [
                        {
                            "type": "Pending Send to Bank",
                            "value": "687",
                            "details": [
                                {
                                    "code": "Payments",
                                    "value": "687"
                                }
                            ]
                        },
                        {
                            "type": "Pending Repair",
                            "value": "8",
                            "details": [
                                {
                                    "code": "Payments",
                                    "value": "5"
                                },
                                {
                                    "code": "Payees",
                                    "value": "3"
                                }
                            ]
                        },
                        {
                            "type": "Pending Authorization",
                            "value": "830",
                            "details": [
                                {
                                    "code": "Payments",
                                    "value": "556"
                                },
                                {
                                    "code": "Payment Batches",
                                    "value": "11"
                                },
                                {
                                    "code": "Payees",
                                    "value": "263"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "payments": {
            "label": "Payments in last 7 Days (My View)",
            "code": "payments",
            "details": [
                {
                    "type": "client_workflow",
                    "label":"Client Workflow",
                    "details":[]
                },
                {
                    "type": "bank_workflow",
                    "label":"Bank Workflow",
                    "lastUpdated":"17/07/2024 04:09:44 PM",
                    "details":[{
                        "code":"proccessed",
                        "label":"Processed by Bank",
                        "value":"25"
                    },
                    {
                        "code":"rejected",
                        "label":"Rejected by Bank",
                        "value":"14"
                    }]
                }
            ]
        }
    },
    "menuItem": ["Home"],
    "user": {
        "username":"SITUR001",
        "groupId":["KRSITEE1", "KRSITEE2", "KRSITEE3"],
        "notificationCount": 4
    }
}