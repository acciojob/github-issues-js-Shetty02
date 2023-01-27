//your code here
const pNoSpan = document.getElementById("pageNo"),
      listElement = document.getElementById("list"),
      netxBtn = document.getElementById("load_next"),      
      prevBtn = document.getElementById("load_prev");       

    let pageNumber = 1;

        const renderIssue = async (issues) =>{

            while(listElement.firstChild){
                listElement.removeChild(listElement.firstChild);
            }

            issues.forEach(issue => {
                const li = document.createElement('li');

                li.textContent = issue.title;

                listElement.appendChild(li);
            })
        }

      const fetchIssue = async () =>{
        pNoSpan.textContent = pageNumber;
        const url = ` https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
        const resp = await fetch(url);
        const data = await resp.json();

        renderIssue(data);
      }

      const handleNextIssue = () =>{
        pageNumber += 1;
        fetchIssue();
      }
      const handlePrevIssue = () =>{
        if(pageNumber === 1){
            alert("Page Number is 1.")
            return;
        }
        pageNumber -= 1;
        fetchIssue();
      }
      netxBtn.addEventListener('click',handleNextIssue)
      prevBtn.addEventListener('click',handlePrevIssue)
      document.addEventListener('DOMContentLoaded',fetchIssue);