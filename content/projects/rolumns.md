---
date: 2022-10-20
image:
  name: near_earth_objects_table
lastMod: 2022-10-20
summary: Rolumns is a Python package that squishes data into rows and columns.
title: Rolumns
---

Rolumns is a Python package I released in October 2022 to squish data into rows and columns.

It supports **flat data**, **grouped data** and **user-defined fields**, with baked-in renderers for **iterable rows of cells** (suitable for packages like [openpyxl](https://openpyxl.readthedocs.io) to generate XLSX spreadsheets) and **Markdown**.

Full documentation is online at [rolumns.dev](https://rolumns.dev), but let's run through a quick example!

## A Flat Table

Let's say we want to transform this data into a Markdown table with _Name_, _Email_ and _Address_ columns:

```json
[
  {
    "name": "Robert Pringles",
    "email": "bob@pringles.pop",
    "address": {
      "planet": "Earth"
    }
  },
  {
    "name": "Daniel Sausage",
    "email": "danny@pringles.pop",
    "address": {
      "planet": "Mars"
    }
  },
  {
    "name": "Charlie Marmalade",
    "email": "charlie@pringles.pop",
    "address": {
      "planet": "Pluto"
    }
  }
]
```

Here's a full code sample you can copy-paste to run, with some inline comments to explain what's happening:

```python
from rolumns import Columns
from rolumns.renderers import MarkdownRenderer

data = [
    {
        "name": "Robert Pringles",
        "email": "bob@pringles.pop",
        "address": {
            "planet": "Earth",
        },
    },
    {
        "name": "Daniel Sausage",
        "email": "danny@pringles.pop",
        "address": {
            "planet": "Mars",
        },
    },
    {
        "name": "Charlie Marmalade",
        "email": "charlie@pringles.pop",
        "address": {
            "planet": "Pluto",
        },
    },
]

# Create a column set.
columns = Columns()

# Add a column called "Name" that reads from the "name" key.
columns.add("Name", "name")

# Add a column called "Email" that reads from the "email"
# key.
columns.add("Email", "email")

# Add a column called "Planet" that reads from the "planet"
# key of the "address" object:
columns.add("Planet", "address.planet")

# Create a Markdown renderer for this column set.
renderer = MarkdownRenderer(columns)

# Render the input data.
print(renderer.render_string(data))
```

All things going well, you should receive a Markdown table like this:

| Name              | Email                | Planet |
| ----------------- | -------------------- | ------ |
| Robert Pringles   | bob\@pringles.pop     | Earth  |
| Daniel Sausage    | danny\@pringles.pop   | Mars   |
| Charlie Marmalade | charlie\@pringles.pop | Pluto  |

If you'd prefer to send the render to an XLSX spreadsheet via a package like [openpyxl](https://openpyxl.readthedocs.io), just replace `MarkdownRenderer` with a `RowsRenderer`:

```python
from openpyxl import Workbook
from openpyxl.styles import Font
from rolumns import Columns
from rolumns.renderers import RowsRenderer

# ...

# Create a row renderer for this column set.
renderer = RowsRenderer(columns)

# Render to an iterable list of rows.
rows = renderer.render(data)

# Create an openpyxl worksheet.
workbook = Workbook()
worksheet = workbook.active

# Append each rendered row to the worksheet.
for row in rows:
    worksheet.append(row)

# Export the workbook.
workbook.save("render.xlsx")
```

{{< image rolumns_xlsx >}}

## More information

I've published a decent series of examples in the [Rolumns Cook Book](https://rolumns.dev/cook-book/) which include grouping by lists, objects and dictionaries, converting data types and building dynamic values, and user-defined fields.

I also have a GitHub repository at [cariad/rolumns-examples](https://github.com/cariad/rolumns-examples) with some examples that hit public APIs to generate interesting tables, like [Who's in Space Right Now?](https://github.com/cariad/rolumns-examples/blob/main/who_in_space.py) and [Which Near-Earth Objects Will Approach Earth This Week?](https://github.com/cariad/rolumns-examples/blob/main/neo.py).

Rolumns is released under the MIT Licence and the source code is available at [cariad/rolumns](https://github.com/cariad/rolumns).
