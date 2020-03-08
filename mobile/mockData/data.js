export const data = (type)=> {
  switch (type) {
      case 'dashboard':
          return ({
              "message": "Success",
              "data": {
                        "new": 610,
                        "loan_check": 405,
                        "total": 2197,
                        "title": "Case Breakdown by Progress",
                        "status_list": [
                            {
                                "data": [
                                    {
                                        "status": "Pending loan check",
                                        "count": 0,
                                        "status_color": null,
                                        "unread_message": 0
                                    }
                                ]
                            },
                            {
                                "data": [
                                    {
                                        "status": "Submission in Progress",
                                        "count": 226,
                                        "status_color": "#02A8F3",
                                        "unread_message": 0
                                    }
                                ]
                            },
                            {
                                "data": [
                                    {
                                        "status": "Accepted",
                                        "count": 191,
                                        "status_color": "#12E35A",
                                        "unread_message": 0
                                    },
                                    {
                                        "status": "Rejected",
                                        "count": 1164,
                                        "status_color": "#F44235",
                                        "unread_message": 0
                                    }
                                ],
                                "label": {
                                    "status": "Completed",
                                    "status_color": "#3F51B5"
                                }
                            }
                        ],
                        "title2": "Loan check",
                        "loan_check_ratings": [
                            {
                                "type": 'x',
                                "id": "A",
                                "label": "Excellent",
                                "color": "#00E34D",
                                "value": 55
                            },
                            {
                                "type": 'x',
                                "id": "B",
                                "label": "Good",
                                "color": "#E0F400",
                                "value": 98
                            },
                            {
                                "type": 'x',
                                "id": "C",
                                "label": "Fair",
                                "color": "#FF9900",
                                "value": 84
                            },
                            {
                                "type": 'x',
                                "id": "D",
                                "label": "Poor",
                                "color": "#FF4141",
                                "value": 168
                            },
                            {
                                "type": 'y',
                                "label": 'Total Loan Check',
                                "value": 123
                            },
                            {
                                "type": 'x',  
                                "id": "other",
                                "label": "Other",
                                "color": "#eee",
                                "value": 1124
                            },
                            {
                                "type": 'y',
                                "label": 'Total Cases',
                                "value": 123
                            }
                        ]
                    }
        })
          
      case "getProjectList":
          return ({
              "message": "Success",
              "data": [
                  {
                    "id": "",
                    "name": "All Projects"
                  },
                  {
                    "id": 11,
                    "name": "Luxor Residences"
                  },
                  {
                    "id": 53,
                    "name": "Florian Project Test"
                  },
                  {
                    "id": 52,
                    "name": "HLB Launchpad"
                  },
                  {
                    "id": 9,
                    "name": "Loanstreet Haven"
                  },
                  {
                    "id": 30,
                    "name": "DEV Test Project"
                  },
                  {
                    "id": 16,
                    "name": "Non-Panel Project"
                  }
              ]
          })
      
        case "statusCollection":
            return({
                "message": "Success",
                "errors": [],
                "data": {
                    "filter_list": [
                        {
                            "type": "param_rating_search_key",
                            "label": "customer_rating",
                            "data": [
                                "A",
                                "B",
                                "C",
                                "D"
                            ]
                        },
                        {
                            "label": "New",
                            "data": [
                                "New"
                            ]
                        },
                        {
                            "label": "Submission in Progress",
                            "data": [
                                "Pending Submission",
                                "Submitted for Approval",
                                "Submitted - KIV",
                                "Pending Acceptance"
                            ]
                        },
                        {
                            "label": "Accepted",
                            "data": [
                                "Accepted"
                            ]
                        },
                        {
                            "label": "Rejected",
                            "data": [
                                "Rejected by Customer",
                                "Rejected by Bank",
                                "Cancel Purchase",
                                "EF Limit"
                            ]
                        }
                    ]
                }
            })

            case "getCases":
                return ({
                    "message": "Success",
                    "errors": [],
                    "data": {
                        "listings": [
                          {
                            "id": 14094, // banker_assignment_id
                            "name": "Mohamad Zaidan bin Mohamad Khalil",
                            "email": "zaidanzeta98@gmail.com",
                            "phone": "0132274021",
                            "case_code": "DE-MLF-140937",
                            "case_status": "Assigned to Bankers",
                            "status_color": "#31c531",
                            "last_status_change": "2019-10-18T18:29:26.189+08:00",
                            "created_at": "2019-10-03T16:33:59.558+08:00",
                            "top_three_banks": {
                              "title": "Top 3 bankers",
                              "column_headers": ["head1", "head2", "head2"],
                              "data": [
                                  {
                                    "max_affordability": "84152248",
                                    "margin_of_finance": "80",
                                    "code": "SCB"
                                  },
                                  {
                                    "max_affordability": "45732978",
                                    "margin_of_finance": "80",
                                    "code": "SCB"
                                  },
                                  {
                                    "max_affordability": "44245695",
                                    "margin_of_finance": "80",
                                    "code": "SCB"
                                  }
                              ]
                            },
                            "call_customer": [
                                {
                                    "label": "Main",
                                    "name": "Piko Tan",
                                    "phone": "0184447777"
                                }
                            ],
                            "subtitle_data": [
                              "Merak Project"
                            ],      
                            "customer_profile": {
                              "title": "Customer(s) Profile", // for developer
                              "data": [
                                { // only for banker-app
                                  "id": "C",
                                  "label": "Overall Rating", // always in bold font style
                                  "color": "#FF9900",
                                },
                                {
                                  "id": "A",
                                  "label": "CCRIS",
                                  "color": "#00E34D"
                                },
                                {
                                  "id": "A",
                                  "label": "CTOS",
                                  "color": "#00E34D"
                                },
                                { // only for banker-app
                                  "id": "A",
                                  "label": "Debt Service Ratio",
                                  "color": "#FF9900",
                                },
                              ]
                            },
                            // for developer if there is loan_score_report.present?
                            // for banker if CCRIS & CTOS rating exists
                            "show_rating": true,
                    
                            "unread_message": true, // for developer-app ??
                            "user_clicked": true,
                    
                            "status_icon": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png",
                            
                             // only for banker-app
                            "final_loan_amount": "MYR 700,000.00",
                            
                            // rest of the response is only for developer-app
                            "rea": false,
                            "loan_score_report": "http://localhost:3000/uploads/loan_score_history/attachment/1344/Loan-Score-Report-DE-MLF-139896-sales-02-04-2019-06-33-33-PM.pdf",
                            "project_id": 1,
                            "project_name": "Merak Project",
                            "banker_assgs_info": [
                              {
                                "id": 31468,
                                "organization": "Alliance Bank Berhad",
                                "name": "Jexwan",
                                "phone": "0123456789",
                                "day_elapsed": "0 Day",
                                "assignment_status": "Accepted",
                                "topic": "BankerAssignment-31468"
                              }
                            ],
                            "threads": [
                              {
                                "item_id": 31468,
                                "item_type": "BankerAssignment",
                                "name": "Jexwan (Alliance Bank Berhad)",
                                "last_msg": "Congrats bro",
                                "last_msg_datetime": "2019-10-03T16:43:27.814+08:00",
                                "unread_count": 5,
                                "topic": "BankerAssignment-31468"
                              },
                              {
                                "item_id": 14083,
                                "item_type": "DeveloperReferral",
                                "name": "Loanplus Team",
                                "last_msg": "",
                                "last_msg_datetime": "",
                                "unread_count": 0,
                                "topic": "DeveloperReferral-14083"
                              }
                            ]
                          },  
                          {
                                "id": 14403, // banker_assignment_id
                                "name": "aaaa AAAAA",
                                "email": "zaidanzeta98@gmail.com",
                                "phone": "0132274021",
                                "case_code": "DE-MLF-141968",
                                "case_status": "Ready For Banker Assignment",
                                "status_icon": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png",
                                "status_color": "#ff4e00",
                                "last_status_change": "2019-10-18T18:29:26.189+08:00",
                                "created_at": "2019-10-03T16:33:59.558+08:00",
                                "subtitle_data": [
                                  "Mortgage Loan", // only for banker-app
                                  "Merak Project"
                                ],
                                "call_customer": [
                                    {
                                        "label": "Main",
                                        "name": "Piko Tan",
                                        "phone": "0184447777"
                                    },
                                    {
                                        "label": "Co",
                                        "name": "Test sia test",
                                        "phone": "0184423432"
                                    }
                                ],
                                "customer_profile": {
                                  "title": "Customer(s) Profile", // for developer
                                  "data": [
                                    { // only for banker-app
                                      "id": "C",
                                      "label": "Overall Rating", // always in bold font style
                                      "color": "#FF9900"
                                    },
                                    {
                                      "id": "A",
                                      "label": "CCRIS",
                                      "color": "#00E34D"
                                    },
                                    {
                                      "id": "A",
                                      "label": "CTOS",
                                      "color": "#00E34D"
                                    },
                                    { // only for banker-app
                                      "id": "A",
                                      "label": "Debt Service Ratio",
                                      "color": "#FF9900"
                                    },
                                  ]
                                },
                                "show_rating": false,
                                "unread_message": false, // for developer-app ??
                                "user_clicked": true,
                                "rea": false,
                                "project_id": 45,
                                
                                 // only for banker-app
                                "final_loan_amount": "MYR 700,000.00",
                                
                                // only for developer-app
                                "loan_score_report": "http://localhost:3000/uploads/loan_score_history/attachment/1344/Loan-Score-Report-DE-MLF-139896-sales-02-04-2019-06-33-33-PM.pdf"
                            },
                            {
                                "id": 14087, // banker_assignment_id
                                "name": "test tst",
                                "email": "zaidanzeta98@gmail.com",
                                "phone": "0132274021",
                                "case_code": "DE-MLF-140932",
                                "case_status": "Pending Acceptance",
                                "status_icon": "",
                                "status_color": "#FF9900",
                                "last_status_change": "2019-10-18T18:29:26.189+08:00",
                                "created_at": "2019-10-03T16:33:59.558+08:00",
                                "subtitle_data": [
                                  "Merak Project"
                                ],
                                "call_customer": [
                                    {
                                        "label": "Main",
                                        "name": "Piko Tan",
                                        "phone": "0184447777"
                                    },
                                    {
                                        "label": "Co",
                                        "name": "Test sia test",
                                        "phone": "0184423432"
                                    },
                                    {
                                        "label": "Co",
                                        "name": "vvv gg nnn",
                                        "phone": "0184423432"
                                    }
                                ],
                                "customer_profile": {
                                  "title": "Customer(s) Profile", // for developer
                                  "data": [
                                    { // only for banker-app
                                      "id": "C",
                                      "label": "Overall Rating", // always in bold font style
                                      "color": "#FF9900"
                                    },
                                    {
                                      "id": "A",
                                      "label": "CCRIS",
                                      "color": "#00E34D"
                                    },
                                    {
                                      "id": "A",
                                      "label": "CTOS",
                                      "color": "#00E34D"
                                    },
                                    { // only for banker-app
                                      "id": "A",
                                      "label": "Debt Service Ratio",
                                      "color": "#FF9900"
                                    }
                                  ]
                                },
                                "show_rating": true,
                                "unread_message": false, // for developer-app ??
                                "user_clicked": true,
                                
                                 // only for banker-app
                                "final_loan_amount": "MYR 700,000.00",
                                
                                // only for developer-app
                                "loan_score_report": "http://localhost:3000/uploads/loan_score_history/attachment/1344/Loan-Score-Report-DE-MLF-139896-sales-02-04-2019-06-33-33-PM.pdf"
                            }
                        ],
                        "page": 1,
                        "total": 422,
                        "limit": 10
                    }
                })

                case "getCaseDetail":
                  return ({
                      "message": "Success",
                      "errors": [],
                      "data": {
                          "personal_info": {
                              "name": "Piko Tan",
                              "phone_no": "0184447777",
                              "status_color": "#31c531",
                              "assg_status": "Ready For Banker Assignment"
                          },
                          // "status_block":{
                          //   "status_icon": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png",
                          //   "text": ["This case requires further review from our experts", "Working hours: 10 a.m. - 6 p.m"]
                          // },
                          "customer_profile": {
                            "title": "Customer(s) Profile",
                            "data": [
                              {
                                "id": "C",
                                "label": "Overall Rating",
                                "color": "#FF9900",
                              },
                              {
                                "id": "A",
                                "label": "CCRIS",
                                "color": "#00E34D"
                              },
                              {
                                "id": "A",
                                "label": "CTOS",
                                "color": "#00E34D"
                              },
                              {
                                "id": "A",
                                "label": "Debt Service Ratio",
                                "color": "#FF9900",
                              },
                            ]
                          },
                          // "top_three_banks": {
                          //   "title": "Top 3 bankers",
                          //   "column_headers": ["head1", "head2", "head2"],
                          //   "data": [
                          //       {
                          //         "max_affordability": "84152248",
                          //         "margin_of_finance": "80",
                          //         "code": "SCB"
                          //       },
                          //       {
                          //         "max_affordability": "45732978",
                          //         "margin_of_finance": "80",
                          //         "code": "SCB"
                          //       },
                          //       {
                          //         "max_affordability": "44245695",
                          //         "margin_of_finance": "80",
                          //         "code": "SCB"
                          //       }
                          //   ]
                          // },
                          "loan_score_report": "http://localhost:3000/uploads/loan_score_history/attachment/1344/Loan-Score-Report-DE-MLF-139896-sales-02-04-2019-06-33-33-PM.pdf",

                          // type: "plain" || "header" || "ratingBox" || "text" || "collapseBox" || "image"
                          "tabs": [
                            {
                              "label": "details",
                              "data": [
                                  {
                                    "type": "plain",
                                    "label": "Product Type",
                                    "data": "Mortgage Loan"
                                  },
                                  {
                                    "type": "plain",
                                    "label": "Final Loan Amount",
                                    "data": "MYR 700,000.00",
                                    "color": "#999"
                                  },
                                  {
                                    "type": "plain",
                                    "label": "Salesperson",
                                    "data": "fathiahTestDEV1",
                                    "phone": null,
                                    "email": "touqeer.ahmad@loanstreet.com.my"
                                  },
                                  {
                                    "type": "plain",
                                    "label": "Salesperson Phone No",
                                    "data": "99999999",
                                    "phone": "99999999",
                                    "email": null
                                  },
                                  {
                                    "type": "header",
                                    "label": "bankers",
                                    "color": "#9a3433"
                                  },
                                  {
                                    "type": 'table',
                                    "label": "Zaidan khalil Banker",
                                    "sub_label": "Loanstreet Standart",
                                    "time": "2019-11-18T18:29:26.189+08:00",
                                    "status": "New",
                                    "color": "blue",
                                    "phone": "99999999",
                                    "chat": {
                                        "id": "123",
                                        "type": "test",
                                        "case_id": "3432",
                                        "name": "Zaydan",
                                        "topic": "chattttt"
                                    }
                                  }
                              ]
                          },
                          {
                              "label": "applicant",
                              "data": [
                                  {
                                      "type": "collapseBox",
                                      "label": "Main Applicant",
                                      "data": [
                                          {
                                              "type": "plain",
                                              "label": "Name (as per IC/Passport)",
                                              "data": "Mohamad Zaidan bin Mohamad Khalil"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "IC/Passport Number",
                                              "data": "980810086149"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Phone Number",
                                              "data": "0132274021"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Email",
                                              "data": "zaidanzeta98@gmail.com"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Age",
                                              "data": "21"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Nationality",
                                              "data": "Malaysian"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "State",
                                              "data": "Selangor"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "City/Town",
                                              "data": "Sepang"
                                          },
                                          {
                                              "type": "header",
                                              "label": "Income",
                                              "color": "#AEF1C5"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Basic Salary",
                                              "data": "MYR 28,000.00/month"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Variable/Commission",
                                              "data": "MYR 7,000.00/month"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Rental Income",
                                              "data": "MYR /month"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Directors Fees",
                                              "data": "MYR 0.00/year"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Interest from Deposits",
                                              "data": "MYR 0.00/year"
                                          },
                                          {
                                              "type": "header",
                                              "label": "Existing Commitments",
                                              "color": "#E94E48"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Hire Purchase",
                                              "data": "MYR 1,500.00/month"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Mortgage Loan",
                                              "data": "MYR 3,000.00/month"
                                          },
                                          {
                                              "type": "header",
                                              "label": "Documents",
                                              "color": "#333"
                                          },
                                          {
                                              "type": "image",
                                              "label": "IC_FRONT1.jpg",
                                              "url": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png"
                                          },
                                          {
                                              "type": "image",
                                              "label": "IC_BACK1.jpg",
                                              "url": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png"
                                          },
                                          {
                                              "type": "header",
                                              "label": "Other Documents",
                                              "color": "#AEF1C5"
                                          },
                                          {
                                              "type": "image",
                                              "label": "IC_FRONT1.jpg",
                                              "url": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png"
                                          },
                                          {
                                              "type": "image",
                                              "label": "IC_BACK1.jpg",
                                              "url": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png"
                                          },
                                      ]
                                  },
                                  {
                                      "type": "collapseBox",
                                      "label": "Co Applicant 1",
                                      "data": [
                                          {
                                              "type": "plain",
                                              "label": "Name (as per IC/Passport)",
                                              "data": "Lock Shu Chen"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "IC/Passport Number",
                                              "data": "900112075132"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Phone Number",
                                              "data": "0132274021"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Email",
                                              "data": "zaidanzeta98@gmail.com"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Age",
                                              "data": "29"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Nationality",
                                              "data": "Malaysian"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "State",
                                              "data": "Selangor"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "City/Town",
                                              "data": "Cyberjaya"
                                          },
                                          {
                                              "type": "header",
                                              "label": "Income",
                                              "color": "#AEF1C5"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Basic Salary",
                                              "data": "MYR 0.00/month"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Variable/Commission",
                                              "data": "MYR 0.00/month"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Rental Income",
                                              "data": "MYR 0.00/month"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Directors Fees",
                                              "data": "MYR 0.00/year"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "Interest from Deposits",
                                              "data": "MYR 0.00/year"
                                          },
                                          {
                                              "type": "header",
                                              "label": "Existing Commitments",
                                              "color": "#E94E48"
                                          },
                                          {
                                              "type": "plain",
                                              "label": "No existing commitments",
                                              "data": ""
                                          },
                                          {
                                              "type": "header",
                                              "label": "Documents",
                                              "color": "#333"
                                          },
                                          {
                                              "type": "image",
                                              "label": "IC_FRONT2.jpg",
                                              "url": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png"
                                          },
                                          {
                                              "type": "image",
                                              "label": "IC_BACK2.jpg",
                                              "url": "https://images.vexels.com/media/users/3/145140/isolated/preview/49015111c7e7e8bf8d34a0ac0f76f171-sun-small-wavy-beams-icon-by-vexels.png"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "label": "property",
                              "data": [
                                  {
                                      "type": "header",
                                      "label": "Property Details",
                                      "color": "#333"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Unit Number",
                                      "data": "90"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Unit Type",
                                      "data": ""
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Property Type",
                                      "data": "Commercial (HDA)",
                                      "color": "#999"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Property Subtype",
                                      "data": "Office"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Construction Status",
                                      "data": "Under Construction"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Land Tenure",
                                      "data": "Leasehold"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Land Usage Type",
                                      "data": "Building"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Land Area (sq ft)",
                                      "data": "100"
                                  },
                                  {
                                      "type": "plain",
                                      "label": "Built Up Area (sq ft)",
                                      "data": "60"
                                  }
                              ]
                          },
                          {
                              "label": "comments",
                              "data": [
                                {
                                  "item_id": 31468,
                                  "item_type": "BankerAssignment",
                                  "name": "fathiahTestDEV1",
                                  "sub_name": "IJM Land",
                                  "last_msg": "Congrats bro",
                                  "last_msg_datetime": "2019-10-03T16:43:27.814+08:00",
                                  "unread_count": 0,
                                  "topic": "BankerAssignment-31468"
                                },
                                {
                                  "item_id": 31468,
                                  "item_type": "DeveloperReferral",
                                  "name": "fathiahTestDEV1",
                                  "sub_name": "IJM Land",
                                  "last_msg": "Congrats bro",
                                  "last_msg_datetime": "2019-10-03T16:43:27.814+08:00",
                                  "unread_count": 0,
                                  "topic": "DeveloperReferral-31468"
                                }
                              ]
                          }
                          ]
                      }
                  })
      
              case "getCaseHistory":
                  return ({
                      "message": "Success",
                      "errors": [],
                      "data": {
                          "history": [
                              {
                                  "history": "Abby Hansen (Hong Leong Bank Berhad) has been assigned by  Gillian Chiow LP (Loanstreet Sdn Bhd)",
                                  "date": "21-06-2019 09:42"
                              },
                              {
                                  "history": "Touqeer Stnd Bnkr (CIMB Bank Berhad) has been assigned by  Gillian Chiow LP (Loanstreet Sdn Bhd)",
                                  "date": "21-06-2019 09:42"
                              },
                              {
                                  "history": "Case Status: Cancel Purchase",
                                  "date": "21-06-2019 09:42"
                              },
                              {
                                  "history": "Touqeer Stnd Bnkr (CIMB Bank Berhad) has been assigned by  Gillian Chiow LP (Loanstreet Sdn Bhd)",
                                  "date": "21-06-2019 09:39"
                              },
                              {
                                  "history": "Abby Hansen (Hong Leong Bank Berhad) has been assigned by  Gillian Chiow LP (Loanstreet Sdn Bhd)",
                                  "date": "21-06-2019 09:39"
                              },
                              {
                                  "history": "Case Status: Assigned to Bankers",
                                  "date": "21-06-2019 09:37"
                              },
                              {
                                  "history": "Case Status: Loan Screening",
                                  "date": "21-06-2019 09:36"
                              },
                              {
                                  "history": "Case Status: Self Evaluation",
                                  "date": "21-06-2019 09:35"
                              },
                              {
                                  "history": "Case Created",
                                  "date": "21-06-2019 09:35"
                              }
                            ]
                      }
                    })

  }


}