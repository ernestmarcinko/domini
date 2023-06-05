var fixture = `
<style>
body {
    position: relative;
}
#absolute {
    position: absolute;
    top: 30px;
    left: 40px;
    width: 100vw;
    height: 100vh;
}
#fixed {
    position: fixed;
    top: 333px;
    left: 444px;
    width: 200px;
    height: 100px;
    padding: 10px;
    margin: 10px 20px 30px 40px;
}
</style>
<h1 id="title">Test Title</h1>
<div id="node"><p>Test</p></div>
<div id="paragraphs">
    <p>Lorem Ipsum 1</p>
    <p>Lorem Ipsum 2</p>
    <p>Lorem Ipsum 3 and more</p>
</div>    
<div id="more-ps" data-id="more-ps" data-thing="Wasupp dude">
    <p class="pClass">Lorem Ipsum 1</p>
    <p id="pId">Lorem Ipsum 2</p>
    <p>Lorem Ipsum 3 and more</p>
</div>    
<div id="selector-tests" class="seltest myseltest">
    <p class="onep p">Lorem Ipsum 1</p>
    <p class="twop p" data-value="some value">Lorem Ipsum 2</p>
    <p class="threp p">Lorem Ipsum 3</p>
    <p class="fourp p">Lorem Ipsum 4</p>
</div>
<div id="list-container">
    <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
    </ul>
</div>
<div id="list-container-two">
    <ul>
        <li class="list-item">list item two 1</li>
        <li class="list-item" id="list-item-2-2">list item two 2</li>
        <li class="list-item">list item two 3</li>
        <li>list item two 4</li>
        <li>list item two 5</li>
        <li class="list-itemx">list item two 6</li>
    </ul>
</div>
<div id="absolute">Text</div>
<div id="fixed">Text</div>
`;