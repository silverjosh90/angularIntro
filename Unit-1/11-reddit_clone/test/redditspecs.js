// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     browser.get('https://angularjs.org');
//
//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();
//
//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });
function addPost(callback) {
  element(by.model('title')).sendKeys('Cool Post!')
  element(by.model('subreddit')).sendKeys('awwww')
  element(by.model('imageURL')).sendKeys('http://sd.keepcalm-o-matic.co.uk/i/keep-calm-you-did-it-14.png')
  element(by.model('description')).sendKeys('Its working very well')
  element(by.css('#submitNewPost')).click()
  return callback()
}



describe('On the reddit clone homepage', function() {
  it('When add post is clicked form appears', function(){
    browser.get('http://localhost:8080/');
    element(by.css('#revealAddForm')).click()
    expect(element(by.model('title')).isDisplayed().then(function(result){
      if (result) {
        addPost(function(){
          element(by.model('commentShow')).click()
          expect(element(by.css('#indcomment')).isDisplayed()).toBeTruthy()
        })
        // element(by.model('title')).sendKeys('Cool Post!')
        // element(by.model('subreddit')).sendKeys('awwww')
        // element(by.model('imageURL')).sendKeys('http://sd.keepcalm-o-matic.co.uk/i/keep-calm-you-did-it-14.png')
        // element(by.model('description')).sendKeys('Its working very well')
        // element(by.css('#submitNewPost')).click().then(function(postsubmit){
        //   expect(element(by.css('.individualPost')).isDisplayed()).toBeTruthy()
      //   })
      }
    }));
    // Check if variable toggle function acts on is true
  })

  it('When add form is submitted post appears', function() {
    browser.get('http://localhost:8080/');
    element(by.css('#revealAddForm')).click()
    addPost(function(){
      expect(element(by.css(".karmaDisplay")).isDisplayed()).toBeTruthy()
    })
  })

  it('When a user adds a comment it appears', function(){
    browser.get('http://localhost:8080/');
    element(by.css('#revealAddForm')).click()
    addPost(function(){
      element(by.model('commentShow')).click()
      element(by.css("#indcomment")).sendKeys('Post appeared!')
      element(by.css("#commentSubmit")).click()
      expect(element(by.css(".commentDisplay")).isDisplayed()).toBeTruthy()
    })
  })

})
