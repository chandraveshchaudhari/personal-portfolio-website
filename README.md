<a href="https://github.com/apirobot/django-react-graphql-simplenote">
    <p align="center">
      <img src="https://raw.githubusercontent.com/apirobot/django-react-graphql-simplenote/master/other/preview.gif" alt="django-react-graphql-simplenote">
    </p>
</a>

---

## Description

`django-react-graphql-simplenote` is an example of note taking application that uses **django & graphene django** on server-side and **typescript & react** on client-side.


## How to run

Clone the repository:

```zsh
➜ git clone https://github.com/apirobot/django-react-graphql-simplenote
```

Create and activate virtualenv:

```zsh
➜  virtualenv -p python3 .venv
➜  source .venv/bin/activate
```

Run scripts from Makefile that install all dependencies, run migrations and start dev server.

```zsh
(.venv) ➜  make dev
(.venv) ➜  make migrate
(.venv) ➜  make run
```

# TO DO
You'll need to use the HTML() or display() functions from IPython's display module:

from IPython.display import display, HTML

## To run jupyter notebooks
`conda activate doctoral-thesis      # activate the environment`
`jupyter notebook`

## embedding the jupyter notebook
https://jupyter-server.readthedocs.io/en/latest/operators/public-server.html#embedding-the-notebook-in-another-website

put this inside /home/chandravesh/.jupyter/jupyter_server_config.py:
c.ServerApp.tornado_settings = {
    'headers': {
        'Content-Security-Policy': "frame-ancestors http://localhost:3000 'self' "
    }
}



run using the following command:
Jupyter server

### Assuming that dataframes df1 and df2 are already defined:
print "Dataframe 1:"
display(df1)
print "Dataframe 2:"
display(HTML(df2.to_html()))
Note that if you just print df1.to_html() you'll get the raw, unrendered HTML.

You can also import from IPython.core.display with the same effect