import pdfkit
from pyvirtualdisplay import Display
with Display() as disp:
    pdfkit.from_file('Reports/report.html', './DemoActions.pdf')