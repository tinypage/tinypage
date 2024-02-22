require "application_system_test_case"

class EntriesTest < ApplicationSystemTestCase
  setup do
    @entry = entries(:one)
  end

  test "visiting the index" do
    visit entries_url
    assert_selector "h1", text: "Entries"
  end

  test "should create page" do
    visit entries_url
    click_on "New page"

    fill_in "Content", with: @entry.content
    fill_in "User", with: @entry.user_id
    click_on "Create Page"

    assert_text "Page was successfully created"
    click_on "Back"
  end

  test "should update Page" do
    visit entry_url(@entry)
    click_on "Edit this page", match: :first

    fill_in "Content", with: @entry.content
    fill_in "User", with: @entry.user_id
    click_on "Update Page"

    assert_text "Page was successfully updated"
    click_on "Back"
  end

  test "should destroy Page" do
    visit entry_url(@entry)
    click_on "Destroy this page", match: :first

    assert_text "Page was successfully destroyed"
  end
end
