# Cardifier

Simple script to format card files to a google doc ready for printing.

Create the following folder/file structure in google drive, put your images on the numbered folders, fill the folder and doc ids on the script and execute the **cardify** function.

```

root
|
└── script
│
└── doc (output)
│
└── data
    │
    └─── cards folder
    |   |
    │   └───  1
    |   |     | card1.png
    |   |     | card2.png
    |   |
    │   └───  2
    |   |     | card1.png
    |   |     | card2.png
    |   |
    │   └───  n  (cards will be added to the final document n times)
    |         | card1.png
    |         | card2.png
    │   
    └─── default card folder
        │   default.png


```