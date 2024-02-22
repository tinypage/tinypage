module EntriesHelper
  def editor_toolbar_button(action:, title:, image:, params: {})
    attributes = { class: "toolbar__button", title:, data: {} }

    if params.present?
      params.each do |k, v|
        attributes[:data]["editor-#{k}-param"] = v
      end
    end

    if action.present?
      attributes[:data]["action"] = "click->editor##{action}"
    end

    button_tag(type: "button", **attributes) do
      icon image
    end
  end

  def editor_toolbar_space
    content_tag("span", class: "toolbar__space") do
      content_tag("span", "")
    end
  end
end
