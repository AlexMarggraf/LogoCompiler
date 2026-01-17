from pathlib import Path

path = Path("./report/")
discard = [".aux", ".bbl", ".fdb_latexmk", ".fls", ".log", ".out", ".gz", ".toc", ".blg"]

if __name__ == "__main__":
    for f in list(path.rglob("*")):
        if f.suffix.lower() in discard:
            f.unlink()