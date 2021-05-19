from selenium import webdriver
from selenium.webdriver.common.keys import Keys
browser = webdriver.Firefox()
browser.get('https://work.crowdsurfwork.com/')
username = browser.find_element_by_name("username")
password = browser.find_element_by_name("password")
submit = browser.find_element_by_name("password")
username.clear()
username.send_keys("steve.desbrow")

password.clear()
password.send_keys("csw.steve.desbrow")
button = browser.find_element_by_tag_name('button')
button.click()
