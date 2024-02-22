require "test_helper"

class EntriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @entry = entries(:one)
  end

  test "should get index" do
    get entries_url
    assert_response :success
  end

  test "should get new" do
    get new_entry_url
    assert_response :success
  end

  test "should create page" do
    assert_difference("Page.count") do
      post entries_url, params: { entry: { content: @entry.content, user_id: @entry.user_id } }
    end

    assert_redirected_to entry_url(Entry.last)
  end

  test "should show page" do
    get entry_url(@entry)
    assert_response :success
  end

  test "should get edit" do
    get edit_entry_url(@entry)
    assert_response :success
  end

  test "should update page" do
    patch entry_url(@entry), params: { entry: { content: @entry.content, user_id: @entry.user_id } }
    assert_redirected_to entry_url(@entry)
  end

  test "should destroy page" do
    assert_difference("Page.count", -1) do
      delete entry_url(@entry)
    end

    assert_redirected_to entries_url
  end
end
