import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const ViewerPdf = () => {
  const [file, setFile] = useState("./somefile.pdf");

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [renderNavButtons, setRenderNavButtons] = useState<Boolean>(false);
  const onSuccess = (sample: any) => {
    alert("PDF document loaded successfully!");
    setPageNumber(1);
    setRenderNavButtons(true);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };
  const previousPage = () => {
    changePage(-1);
  };
  const nextPage = () => {
    changePage(+1);
  };
  const onFileChange = (event: any) => {
    setPageNumber(1);
    setFile(event.target.files[0]);
  };
  return (
    <>
      <div>
        <div>
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>

        <Document
          file={file}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setRenderNavButtons(true);
            onSuccess;
          }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

      {renderNavButtons && (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button disabled={pageNumber <= 1} onClick={previousPage} className="bg-blue-500">
            <NavigateBeforeIcon fontSize="small" />
          </Button>
          <Button disabled>
            {pageNumber} of {numPages}
          </Button>
          <Button disabled={pageNumber === numPages} onClick={nextPage} className="bg-blue-500">
            <NavigateNextIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      )}
    </>
  );
};

export default ViewerPdf;
