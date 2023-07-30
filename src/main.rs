use axum::{routing::get, Router};

async fn hello_world() -> &'static str {
    "Hello world from rust!!"
}

async fn get_data() -> &'static str {
    "get"
}

#[shuttle_runtime::main]
async fn axum() -> shuttle_axum::ShuttleAxum {
    let router = Router::new()
        .route("/", get(hello_world))
        .route("/get", get(get_data));

    Ok(router.into())
}
