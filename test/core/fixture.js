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
    <ul class="ul-item">
        <li class="list-item">list item two 1</li>
        <li class="list-item" id="list-item-2-2">list item two 2</li>
        <li class="list-item">list item two 3</li>
        <li>list item two 4</li>
        <li>list item two 5</li>
        <li class="list-itemx">list item two 6</li>
    </ul>
</div>
<form action="" method="get" name="testform">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" value="My Name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" value="test@test.com" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
<div class="loremipsum">
    <p class="pparent1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam tincidunt rhoncus rhoncus. Maecenas ullamcorper, 
        felis nec eleifend sagittis, mauris lectus hendrerit metus, 
        eu vehicula dui lectus in lacus. Vestibulum ante ipsum primis in 
        faucibus orci luctus et ultrices posuere cubilia curae; Aliquam pharetra at enim ut interdum. 
        Proin dui risus, consectetur vitae tincidunt eget, finibus vel ligula. Suspendisse ex tellus, 
        hendrerit vitae consectetur in, vulputate sit amet orci. Quisque laoreet eleifend eros et pretium. 
        Nulla Ac tempor mauris. Sed lectus quam, tristique in erat sit amet, ullamcorper maximus ante. 
        Sed ac velit nec nisl fringilla fringilla. Nam lacinia tincidunt sapien eu gravida. 
        Vivamus eget lorem commodo, tristique dui nec, laoreet velit. Suspendisse molestie ut ipsum ut 
        finibus. Morbi volutpat, ligula sit amet aliquet lobortis, orci orci molestie ligula, nec 
        scelerisque nisl enim mattis sapien. Fusce condimentum nibh quis est suscipit, 
        in finibus diam scelerisque.
    </p>
    <p class="pparent2">
        Nullam vel aliquam urna. Quisque efficitur ullamcorper volutpat. Aliquam orci massa, 
        luctus nec vestibulum vitae, interdum nec lectus. Donec fringilla, sem auctor 
        condimentum dignissim, sapien purus viverra ex, at scelerisque justo tortor 
        ut dui. Suspendisse euismod lacus sed arcu consequat malesuada. Aliquam ac
        condimentum urna. Ut Ac diam ex.
     </p>
     <p class="pparent3">
     Etiam aliquam vehicula aliquam. Nulla iaculis faucibus nibh, eu finibus justo 
     rhoncus eget. Quisque vitae vestibulum augue, eget elementum magna. Donec porttitor
      eu lectus nec tempor. Maecenas in bibendum quam, sed ultrices sapien. Ut pulvinar
       bibendum enim sed ultrices. Nam in risus sem. Nunc scelerisque ipsum non ex consectetur, 
        at bibendum risus ullamcorper. Donec eget mi lacus.
     </p>
  </p>
</div>
<div id="absolute">Text</div>
<div id="fixed">Text</div>
`;